import { describe, expect, it } from "vitest";
import { evaluateAudit, type AllowlistEntry, type AuditReport } from "@/scripts/security-audit";

const TODAY = "2026-10-08";

function advisory(id: string, name: string, severity: string) {
  return {
    source: 1,
    name,
    title: `${name} advisory`,
    url: `https://github.com/advisories/${id}`,
    severity,
    range: "*"
  };
}

// Mirrors the shape of `npm audit --json`: a root advisory sits on the
// vulnerable package; dependents reference it by package name only.
function report(...advisories: ReturnType<typeof advisory>[]): AuditReport {
  const vulnerabilities: AuditReport["vulnerabilities"] = {};
  for (const item of advisories) {
    vulnerabilities[item.name] = { name: item.name, severity: item.severity, via: [item] };
  }
  vulnerabilities["dependent"] = {
    name: "dependent",
    severity: "high",
    via: advisories.map((item) => item.name)
  };
  return { vulnerabilities };
}

const braces: AllowlistEntry = {
  id: "GHSA-vfj7-8cjw-p6xm",
  package: "braces",
  reason: "disputed upstream; dev-only",
  expires: "2026-12-31"
};

describe("evaluateAudit", () => {
  it("passes when the report is clean and the allowlist is empty", () => {
    expect(evaluateAudit({ vulnerabilities: {} }, [], TODAY)).toEqual([]);
  });

  it.each(["high", "critical"])("fails on an unlisted %s advisory", (severity) => {
    const problems = evaluateAudit(report(advisory("GHSA-aaaa", "pkg", severity)), [], TODAY);

    expect(problems).toHaveLength(1);
    expect(problems[0]).toContain("GHSA-aaaa");
  });

  it.each(["low", "moderate"])("ignores an unlisted %s advisory", (severity) => {
    expect(evaluateAudit(report(advisory("GHSA-aaaa", "pkg", severity)), [], TODAY)).toEqual([]);
  });

  it("passes when every high advisory is allowlisted and not expired", () => {
    const audit = report(advisory(braces.id, "braces", "high"));

    expect(evaluateAudit(audit, [braces], TODAY)).toEqual([]);
  });

  it("passes on the expiry day itself", () => {
    const audit = report(advisory(braces.id, "braces", "high"));

    expect(evaluateAudit(audit, [braces], braces.expires)).toEqual([]);
  });

  it("still fails on other high advisories when one is allowlisted", () => {
    const audit = report(advisory(braces.id, "braces", "high"), advisory("GHSA-bbbb", "other", "high"));

    const problems = evaluateAudit(audit, [braces], TODAY);

    expect(problems).toHaveLength(1);
    expect(problems[0]).toContain("GHSA-bbbb");
  });

  it("fails once an allowlist entry has expired", () => {
    const audit = report(advisory(braces.id, "braces", "high"));

    const problems = evaluateAudit(audit, [braces], "2027-01-01");

    expect(problems).toHaveLength(1);
    expect(problems[0]).toContain("expired");
  });

  it("fails on an allowlist entry the report no longer contains", () => {
    const problems = evaluateAudit({ vulnerabilities: {} }, [braces], TODAY);

    expect(problems).toHaveLength(1);
    expect(problems[0]).toContain("no longer reported");
  });

  it("reports an advisory reached through several packages once", () => {
    const shared = advisory("GHSA-cccc", "pkg", "high");
    const audit: AuditReport = {
      vulnerabilities: {
        pkg: { name: "pkg", severity: "high", via: [shared] },
        twin: { name: "twin", severity: "high", via: [shared] }
      }
    };

    expect(evaluateAudit(audit, [], TODAY)).toHaveLength(1);
  });
});
