import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import matter from "gray-matter";

const ROOT = path.resolve(__dirname, "..");

const VALID_STATUSES = [
	"raw",
	"suggested",
	"candidate",
	"edited",
	"canon",
	"question",
	"deferred",
	"deprecated",
	"draft",
	"reviewed",
];

const REQUIRED_FIELDS = ["id", "type", "status", "title"];

const FOLDER_STATUS_RULES: Record<string, string[]> = {
	"01-canon": ["canon"],
	"02-candidates": ["suggested", "candidate", "edited"],
	"00-inbox": ["raw", "question", "deferred"],
};

interface ValidationError {
	file: string;
	severity: "critical" | "warning" | "info";
	message: string;
}

function getTargetFiles(mode: string): string[] {
	if (mode === "--staged-only") {
		const output = execSync("git diff --cached --name-only --diff-filter=ACM", {
			cwd: ROOT,
			encoding: "utf-8",
		});
		return output
			.split("\n")
			.filter((f) => f.endsWith(".md"))
			.filter((f) => !f.startsWith("90-meta/templates/"))
			.filter((f) => !f.startsWith("90-meta/schema/"))
			.filter((f) => !f.startsWith(".claude/"))
			.filter((f) => f !== "CLAUDE.md")
			.map((f) => path.join(ROOT, f));
	}

	if (mode === "--changed-only") {
		const output = execSync("git diff --name-only HEAD~1 --diff-filter=ACM", {
			cwd: ROOT,
			encoding: "utf-8",
		});
		return output
			.split("\n")
			.filter((f) => f.endsWith(".md"))
			.filter((f) => !f.startsWith("90-meta/templates/"))
			.filter((f) => !f.startsWith("90-meta/schema/"))
			.filter((f) => !f.startsWith(".claude/"))
			.filter((f) => f !== "CLAUDE.md")
			.map((f) => path.join(ROOT, f));
	}

	const files: string[] = [];
	const contentDirs = [
		"00-inbox",
		"01-canon",
		"02-candidates",
		"03-structure",
		"04-scenes",
		"05-drafts",
		"06-revisions",
		"08-manuscript",
		"10-lore-documents",
		"20-game-adaptation",
	];

	for (const dir of contentDirs) {
		const dirPath = path.join(ROOT, dir);
		if (!fs.existsSync(dirPath)) continue;
		walkDir(dirPath, files);
	}

	return files;
}

function walkDir(dir: string, result: string[]): void {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			walkDir(fullPath, result);
		} else if (entry.name.endsWith(".md") && entry.name !== ".gitkeep") {
			result.push(fullPath);
		}
	}
}

function validateFile(filePath: string): ValidationError[] {
	const errors: ValidationError[] = [];
	const relPath = path.relative(ROOT, filePath);
	const content = fs.readFileSync(filePath, "utf-8");

	if (!content.startsWith("---")) {
		errors.push({
			file: relPath,
			severity: "critical",
			message: "frontmatter가 없습니다",
		});
		return errors;
	}

	let parsed: matter.GrayMatterFile<string>;
	try {
		parsed = matter(content);
	} catch {
		errors.push({
			file: relPath,
			severity: "critical",
			message: "frontmatter 파싱 실패",
		});
		return errors;
	}

	const data = parsed.data;

	for (const field of REQUIRED_FIELDS) {
		if (!data[field]) {
			errors.push({
				file: relPath,
				severity: "critical",
				message: `필수 필드 누락: ${field}`,
			});
		}
	}

	if (data.status && !VALID_STATUSES.includes(data.status)) {
		errors.push({
			file: relPath,
			severity: "critical",
			message: `잘못된 status 값: ${data.status}`,
		});
	}

	for (const [folder, allowedStatuses] of Object.entries(FOLDER_STATUS_RULES)) {
		if (relPath.startsWith(folder + "/") && data.status) {
			if (!allowedStatuses.includes(data.status)) {
				errors.push({
					file: relPath,
					severity: "critical",
					message: `${folder}/ 에는 status: ${allowedStatuses.join(", ")}만 허용됩니다 (현재: ${data.status})`,
				});
			}
		}
	}

	const fileName = path.basename(filePath, ".md");
	if (fileName !== fileName.toLowerCase() || fileName.includes(" ") || fileName.includes("_")) {
		if (!/^[a-z0-9-]+$/.test(fileName)) {
			errors.push({
				file: relPath,
				severity: "warning",
				message: `파일명이 kebab-case가 아닙니다: ${fileName}`,
			});
		}
	}

	return errors;
}

function main(): void {
	const args = process.argv.slice(2);
	const mode = args[0] || "--all";

	const files = getTargetFiles(mode);

	if (files.length === 0) {
		console.log("검증할 파일이 없습니다.");
		process.exit(0);
	}

	console.log(`검증 대상: ${files.length}개 파일\n`);

	const allErrors: ValidationError[] = [];

	for (const file of files) {
		if (!fs.existsSync(file)) continue;
		const errors = validateFile(file);
		allErrors.push(...errors);
	}

	if (allErrors.length === 0) {
		console.log("모든 파일이 검증을 통과했습니다.");
		process.exit(0);
	}

	const criticals = allErrors.filter((e) => e.severity === "critical");
	const warnings = allErrors.filter((e) => e.severity === "warning");
	const infos = allErrors.filter((e) => e.severity === "info");

	if (criticals.length > 0) {
		console.log("=== CRITICAL ===");
		for (const e of criticals) {
			console.log(`  ${e.file}: ${e.message}`);
		}
		console.log();
	}

	if (warnings.length > 0) {
		console.log("=== WARNING ===");
		for (const e of warnings) {
			console.log(`  ${e.file}: ${e.message}`);
		}
		console.log();
	}

	if (infos.length > 0) {
		console.log("=== INFO ===");
		for (const e of infos) {
			console.log(`  ${e.file}: ${e.message}`);
		}
		console.log();
	}

	console.log(
		`결과: critical ${criticals.length}, warning ${warnings.length}, info ${infos.length}`,
	);

	if (criticals.length > 0) {
		process.exit(1);
	}
}

main();
