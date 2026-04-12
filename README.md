# SG4 Tech — MVP Platform (Hybrid Gen SEO + Consulting)

## 🎯 Product Goal

Build a **hybrid content + consulting platform** that:

* attracts inbound traffic via high-intent engineering/business problems
* converts founders/CEOs into conversations
* positions the author as an operator who fixes delivery systems

---

## 🧠 Core Concept

This is NOT a blog.

This is:

> **A system of high-value problem pages that diagnose and explain engineering failures in business terms**

Each page = entry point into a real problem.

---

## 👤 Target Audience (ICP)

Primary:

* Founders (non-technical or semi-technical)
* CEOs of startups / growth companies

Context:

* engineering team exists (10–100 people)
* delivery is slow, unpredictable, unclear
* business frustration with engineering

---

## 💥 Core Problems We Target

* “Why is our product always late?”
* “Why are developers busy but nothing ships?”
* “Why hiring more engineers doesn’t help?”
* “Why we don’t understand what engineering is doing?”

---

## 🧱 Product Structure (MVP)

### Pages:

```id="v9o3p4"
/ (homepage)

/why-engineering-is-slow
/why-nothing-ships
/why-hiring-more-engineers-doesnt-help

/about
```

---

## 🏗️ Tech Stack

* Next.js (App Router)
* TypeScript
* MDX (for content)
* CSS Modules (no heavy UI frameworks)
* Vercel (deployment)

---

## 📁 Project Structure

```id="8r5t7w"
/app
  /page.tsx
  /why-engineering-is-slow/page.tsx
  /why-nothing-ships/page.tsx
  /why-hiring-more-engineers/page.tsx
  /about/page.tsx

/content
  why-engineering-is-slow.mdx
  why-nothing-ships.mdx
  why-hiring-more-engineers.mdx

/components
  Article.tsx
  CTA.tsx
  Section.tsx

/lib
  seo.ts
```

---

## ✍️ Content Model (CRITICAL)

Each page is NOT an article.

It follows this structure:

```id="6p7h1k"
H1 (problem-focused)

TL;DR

Symptoms (recognition)

Why this happens (simple explanation, no jargon)

What most companies do wrong

How to diagnose

What actually works (framework)

Real case (MANDATORY — with numbers)

Soft CTA
```

---

## 🔥 Differentiation

Content must include:

* real experience (Head of Engineering level)
* measurable impact (e.g. delivery x3, bugs ÷10)
* system thinking (not tips)

---

## 🎯 Tone & Language

* business-first, not engineering-first
* simple language (CEO-friendly)
* no jargon unless explained
* confident, diagnostic, slightly provocative

---

## 📣 CTA Strategy (Consultative)

NO aggressive selling.

CTA examples:

* “If this sounds familiar, I can help diagnose what’s going on.”
* “Happy to take a look at your situation.”

CTA should:

* feel natural
* appear after insight, not before
* not interrupt reading

---

## 🧩 Components to Implement

### 1. Article Component

* renders MDX content
* handles layout and typography

### 2. CTA Component

* reusable block
* accepts text + optional contact link

### 3. Section Component

* consistent spacing and structure

---

## ⚙️ SEO Basics (Minimal)

* each page has:

    * title
    * description
* semantic HTML (h1, h2, lists)
* fast load

---

## 🚀 MVP Scope (STRICT)

Codex MUST:

* setup project
* create routing
* implement MDX support
* create 3 content pages (empty or placeholder)
* create homepage
* create about page
* implement basic components (Article, CTA)

Codex MUST NOT:

* over-engineer design
* add animations
* add complex UI systems

---

## 📈 Future Extensions (DO NOT IMPLEMENT NOW)

* analytics
* CMS
* design system
* auth
* complex SEO

---

## 🧭 Philosophy

> Build fast → validate → iterate

> Focus on leverage, not completeness

---

## 👉 Immediate Next Step (after Codex)

* fill 1 page with real content
* deploy
* share on LinkedIn
