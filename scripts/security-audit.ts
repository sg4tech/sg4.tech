// Security audit gate: `npm audit` at high severity, minus a short, dated
// allowlist of advisories that have no patched release and no reachable path
// in this project (see audit-allowlist.json). Each entry carries a reason and
// an expiry date, so an exception is reviewed rather than forgotten:
//
// - an unlisted high/critical advisory fails the gate, as plain `npm audit` would;
// - an expired entry fails the gate until it is re-justified or removed;
// - an entry the report no longer contains fails the gate, so a fixed or
//   withdrawn advisory gets its exception deleted.
//
// Runs directly with Node's TypeScript type stripping: `node scripts/security-audit.ts`.

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

type AuditAdvisory = {
  url: string;
  severity: string;
  title: string;
  name: string;
};

type AuditVulnerability = {
  name: string;
  severity: string;
  // A root advisory object, or the name of a vulnerable package this one depends on.
  via: ReadonlyArray<AuditAdvisory | string>;
};

export type AuditReport = {
  vulnerabilities: Record<string, AuditVulnerability>;
};

export type AllowlistEntry = {
  id: string;
  package: string;
  reason: string;
  /** ISO-8601 date (YYYY-MM-DD); the entry is valid through this day. */
  expires: string;
};

const BLOCKING_SEVERITIES = new Set(["high", "critical"]);

function advisoryId(advisory: AuditAdvisory): string {
  return advisory.url.split("/").pop() ?? advisory.url;
}

function blockingAdvisories(report: AuditReport): Map<string, AuditAdvisory> {
  const found = new Map<string, AuditAdvisory>();
  for (const vulnerability of Object.values(report.vulnerabilities)) {
    for (const via of vulnerability.via) {
      if (typeof via !== "string" && BLOCKING_SEVERITIES.has(via.severity)) {
        found.set(advisoryId(via), via);
      }
    }
  }
  return found;
}

/** Returns one message per problem; an empty list means the gate passes. */
export function evaluateAudit(
  report: AuditReport,
  allowlist: ReadonlyArray<AllowlistEntry>,
  today: string
): string[] {
  const problems: string[] = [];
  const advisories = blockingAdvisories(report);
  const allowed = new Map(allowlist.map((entry) => [entry.id, entry]));

  for (const [id, advisory] of advisories) {
    if (!allowed.has(id)) {
      problems.push(`${id} (${advisory.severity}) in ${advisory.name}: ${advisory.title}`);
    }
  }

  for (const entry of allowlist) {
    // ISO dates compare correctly as strings.
    if (entry.expires < today) {
      problems.push(
        `${entry.id} allowlist entry expired on ${entry.expires}: re-check upstream, then renew or remove it`
      );
    } else if (!advisories.has(entry.id)) {
      problems.push(`${entry.id} is no longer reported: remove it from the allowlist`);
    }
  }

  return problems;
}

function runAudit(): AuditReport {
  try {
    return JSON.parse(execFileSync("npm", ["audit", "--json"], { encoding: "utf8" })) as AuditReport;
  } catch (error) {
    // npm audit exits non-zero when it finds anything; the JSON is still on stdout.
    const stdout = (error as { stdout?: string }).stdout;
    if (!stdout) {
      throw error;
    }
    return JSON.parse(stdout) as AuditReport;
  }
}

function main(): void {
  const allowlistPath = join(process.cwd(), "audit-allowlist.json");
  const allowlist = JSON.parse(readFileSync(allowlistPath, "utf8")) as AllowlistEntry[];
  const today = new Date().toISOString().slice(0, 10);

  const problems = evaluateAudit(runAudit(), allowlist, today);
  for (const entry of allowlist) {
    console.log(`allowlisted id=${entry.id} package=${entry.package} expires=${entry.expires}`);
  }
  if (problems.length > 0) {
    for (const problem of problems) {
      console.error(`audit problem: ${problem}`);
    }
    process.exit(1);
  }
  console.log(`audit passed allowlisted=${allowlist.length}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
