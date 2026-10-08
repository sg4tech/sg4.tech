# CI guardrails playbook

Companion to the article [Code entropy: how CI checks keep AI from piling up legacy](https://sg4.tech/blog/code-entropy-ci-checks-ai-legacy/) by Victor Demin.

This is a step-by-step procedure for adding CI checks that stop a codebase from accumulating legacy. It is written so a coding agent can apply it to a repository when a person asks it to, for example:

> Apply https://sg4.tech/blog/code-entropy-ci-checks-ai-legacy/playbook.md to this repository.

It is guidance, not a script. The person who asked stays in charge: confirm the plan with them before changing CI, and report back when done.

## Principles

1. **A check beats a written rule.** A rule in a document can be read and still broken; a failing build cannot be skipped. Prefer adding a check over adding a sentence to AGENTS.md.
2. **One gate command.** All checks run behind one local command (for example `make verify` or `npm run check`), and CI runs exactly the same command.
3. **Start from where the code is.** On an existing codebase, set every limit at the current level so nothing gets worse on day one. Lower the limit after each refactoring step. Never raise it.
4. **Never weaken a check to make it pass.** Raising a limit, adding an exclusion, or silencing a rule with a comment is a workaround, not a fix. If a check truly cannot pass, stop and ask the person.
5. **Keep what works.** If the repository already has a working tool for a level, keep it. Do not swap tools for equivalents.
6. **Adding checks does not change behavior.** If existing behavior looks wrong, pin it with a test and report it; don't fix it in the same change.

## Step 0. Survey the repository

Before changing anything, find out and write down:

- the languages and package managers in use;
- the existing CI configuration and the checks it already runs;
- the existing local commands for lint, types, and tests;
- which of the seven levels below are already covered, partly covered, or missing.

Show this summary and the planned changes to the person, and wait for their go-ahead.

## Step 1. Create the gate

Add a single command that runs every check and fails if any fails. Make CI run that same command on every pull request. Run it locally once to confirm it works before adding new checks to it.

## Step 2. Add the levels, cheapest first

Add one level at a time. After each level, run the gate locally and make sure it passes before moving on. After adding each check, introduce a deliberate violation, confirm the gate fails, then revert it.

| Level | Python | PHP | JS/TS |
|---|---|---|---|
| 1. Dead code | vulture | shipmonk/dead-code-detector (PHPStan) | knip |
| 2. Linters and formatters | ruff | PHP_CodeSniffer (phpcs) | ESLint + Prettier |
| 3. Static analysis | mypy (strict) | PHPStan | tsc (strict) |
| 4. Unit tests and coverage | pytest + coverage | PHPUnit | Jest / Vitest |
| 5. Complexity | complexipy | PHPMD, cognitive-complexity (PHPStan) | ESLint complexity |
| 5. Duplication | pylint duplicate-code | jscpd | jscpd |
| 6. Architecture and coupling | import-linter | Deptrac | dependency-cruiser |

For each level:

### 1. Dead code

- **Goal:** unused code fails the build.
- **On legacy code:** delete what the tool finds if it is clearly unused; for findings that need a human decision, record them in the tool's baseline or ignore list and list them in your report.
- **Done when:** the gate fails if new unused code is added.

### 2. Linters and formatters

- **Goal:** code style is checked by a tool, never discussed in review.
- **On legacy code:** if reformatting the whole codebase at once is too large a diff, enforce the formatter on changed files first and reformat the rest in a separate change.
- **Done when:** a style violation fails the gate.

### 3. Static analysis

- **Goal:** strict type checking: mypy with `strict = true`, tsc with `"strict": true`, PHPStan at the highest level the code can reach.
- **On legacy code:** use the tool's baseline where it has one (PHPStan can generate a baseline file); otherwise start strict on new modules and widen the scope over time.
- **Done when:** a type error in checked code fails the gate.

### 4. Unit tests and coverage

- **Goal:** tests run in the gate, with a coverage threshold. The article uses 80% as the target.
- **On legacy code:** set the threshold at the current coverage and raise it as tests are added.
- **Done when:** a failing test, or coverage below the threshold, fails the gate.
- **Watch for:** tests that execute code without asserting anything. Coverage gained that way is not progress.

### 5. Complexity and duplication

- **Goal:** hard limits on function complexity and on duplicated code.
- **On legacy code:** set the complexity limit at the most complex function in the project, and the duplication threshold at the current level. Lower them after each refactoring step.
- **Done when:** a function over the limit, or duplication over the threshold, fails the gate.

### 6. Architecture and coupling

- **Goal:** layers with enforced dependency rules. The domain does not import the database, HTTP, or external API code; outer layers reach it through defined interfaces.
- **On legacy code:** describe the layers the code actually has, record the current violations as a baseline if the tool supports it (dependency-cruiser and Deptrac do), and forbid new ones.
- **Done when:** a new forbidden import fails the gate.

### 7. Written rules

- **Goal:** an AGENTS.md (or the repository's existing agent rules file) holding only what no check can enforce.
- **Must include this rule:** weakening a check to make it pass is a workaround, not a fix.
- **Prefer:** for each rule, name the check that enforces it. A rule with no check behind it is a candidate for a new check.

## Step 3. Report back

When finished, report to the person:

- which levels were added, and which tool and command enforce each;
- every limit and baseline set from the current state, so they can be lowered over time;
- anything skipped or left for a human decision, and why;
- confirmation that the gate passes locally and that CI runs the same command.

## Ready-made option for Python

For new Python projects, [python-guardrails-template](https://github.com/sg4tech/python-guardrails-template) sets up all of the above in one command:

```sh
copier copy gh:sg4tech/python-guardrails-template my-project
```
