# AGENTS.md

## Decision and Thinking

- Before implementing, ensure the task itself makes sense.
- If the request is ambiguous, incomplete, or potentially suboptimal, clarify or challenge it.
- Prefer the highest-leverage solution, not the most obvious one.
- Identify constraints and bottlenecks before optimizing.
- For non-trivial tasks, outline a short approach before implementation.
- Do not proceed with irreversible or high-risk changes under uncertainty.

## Core Standard

- First understand what actually works now, not what should work in theory.
- Treat assumptions as risks until verified.
- Prefer small, reversible, observable changes over clever rewrites.
- Preserve the working path until the replacement is proven.

## Engineering Quality

- Default to test-first development and move as close to TDD as practical.
- Add or update automated tests together with behavior changes.
- Do not ask the user to test manually until reasonable automated checks are exhausted.
- Use linters, type checks, and static analysis wherever the stack supports them.
- Prefer explicit schemas, contracts, and strict typing over hidden assumptions.

## Runtime Truth

- Treat built artifacts and real endpoints as the source of runtime truth.
- Verify real runtime behavior from the actual artifact and endpoint, not from assumptions or release metadata.
- If a real production artifact, export, or response is available, trust it above inferred structure from code or tests.

## Parser and Integration Rules

- Use real fixtures as the primary source for parser and integration work.
- Any parser behavior change should come with a fixture-based test.
- A passing fixture test does not guarantee live runtime behavior; verify the runtime layer separately.
- For browser extensions, a new supported page is not complete until both parser logic and content-script injection are verified.
- New backend response statuses are runtime contract changes; update all consumers and add consumer-side tests.

## Schema and Data Rules

- Treat live schema and stored data shape as product/data contracts.
- Do not add, remove, rename, or reorder schema elements without explicit approval.
- Keep schema migration separate from the normal write-path.
- Safe UI/validation refresh is allowed; silent schema migration is not.

## Required Checks

- Start with the smallest relevant test scope.
- Then run broader validation only after the local fix is stable.
- Distinguish clearly between lint, unit tests, integration checks, build, release, and live runtime verification.
- A successful build or deploy command does not prove the live system works.

## Retros Rules

- Log retros for live incidents, schema/data mistakes, and recurring failure modes.
- Each retro should include:
  - situation
  - what happened
  - root cause
  - retrospective
  - conclusions
  - permanent changes

## Token Discipline

- Keep answers short by default.
- Prefer action plus result over long explanation.
- Do not repeatedly restate saved context.
- Read files and fixtures narrowly instead of re-reading large files wholesale.
- For live-only bugs, move to a focused runtime probe sooner.

## Working Style

- Do as much of the work as possible without pushing avoidable effort onto the user.
- Separate verified facts, hypotheses, and guesses.
- Do not silently turn implementation convenience into a product decision.
- If a bug is fixed, add a guardrail: a test, check, script, or documented rule.
