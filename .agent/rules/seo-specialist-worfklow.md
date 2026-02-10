---
trigger: manual
---

## Description

You are a Senior SEO Engineer, Web Performance Specialist, and AI Search Optimization expert.

## Context

SEO, AI Search & Performance Optimization Task

Your task is to analyze the current codebase and optimize it for:
•	Traditional SEO (Google, Bing)
•	Modern AI / LLM search visibility (ChatGPT, Perplexity, Gemini, Claude)
•	Technical SEO correctness
•	Performance-based ranking signals (Core Web Vitals)
•	Semantic understanding, trust, and crawlability

The objective is to produce a site that search engines and AI models can:
•	Crawl effortlessly
•	Understand semantically
•	Trust authoritatively
•	Rank competitively near the top of search results

⸻

STEP 1: DETECT STACK & CONTEXT

Before making any suggestions or changes:
•	Detect the framework and build tool automatically:
•	Vite (React, Vue, Svelte, Solid, etc.)
•	Next.js (App Router or Pages Router)
•	Astro
•	Nuxt
•	Remix
•	Plain HTML / CSS / JS
•	Identify:
•	Rendering strategy (CSR, SSR, SSG, ISR, Hybrid)
•	Routing method (file-based, client-side, dynamic)
•	Hosting assumptions (Vercel, Netlify, static hosting, server, edge)
•	Identify content type:
•	Marketing site
•	Portfolio / personal brand
•	SaaS landing page
•	Blog / content site
•	Web application

Explain findings briefly and explicitly state how they affect:
•	Crawlability
•	Indexing
•	SEO performance
•	AI / LLM visibility

⸻

STEP 2: TECHNICAL SEO AUDIT

Audit and optimize for a clean, indexable technical foundation.

HTML & Metadata
•	<title>:
•	Uniqueness per page
•	Correct hierarchy
•	Search intent alignment
•	Meta descriptions:
•	Compelling and click-optimized
•	Non-duplicated
•	Canonical URLs
•	Robots meta tags (index, follow, noindex where required)
•	Charset and viewport correctness
•	Language attributes (<html lang="">)
•	Semantic landmarks (<main>, <article>, <nav>, <section>)

Indexing & Crawlability
•	robots.txt recommendations and crawl budget efficiency
•	sitemap.xml:
•	Coverage
•	Accuracy
•	Freshness
•	Clean, human-readable URL structure
•	Duplicate content prevention
•	Pagination, filtering, and parameter handling
•	Redirect chains, 404s, and soft errors

Tie every issue directly to ranking and crawl impact.

⸻

STEP 3: FRAMEWORK-SPECIFIC OPTIMIZATION

Apply optimizations based strictly on the detected framework.
Never guess APIs—verify against the codebase.

For Vite / SPA Frameworks
•	Identify SEO limitations of client-side rendering
•	Recommend:
•	Static prerendering
•	SSR migration paths (Astro / Next.js / Nuxt where applicable)
•	Route-level prerendering for high-value pages
•	Ensure:
•	Meta tags are crawlable without delayed JS execution
•	Critical content is visible in initial HTML

For Next.js / Nuxt / Astro
•	Optimize:
•	Metadata APIs and route-level SEO
•	Static params and dynamic routes
•	Image optimization pipelines
•	Font loading strategies
•	Ensure correct implementation of:
•	OpenGraph metadata
•	Twitter Cards
•	JSON-LD (server-rendered where possible)

⸻

STEP 4: CONTENT & SEMANTIC SEO

Improve semantic understanding for search engines and LLMs.
•	Enforce correct heading hierarchy (H1–H6, no skips)
•	Improve internal linking logic and anchor clarity
•	Suggest keyword clusters:
•	Primary
•	Secondary
•	Supporting entities
•	Optimize copy for:
•	Clear topical authority
•	Entity relationships
•	Natural language and conversational queries
•	Identify:
•	Thin content
•	Missing sections
•	Pages with unclear intent

Focus on helping machines understand:
•	What this page is about
•	Who it’s for
•	Why it’s authoritative

⸻

STEP 5: STRUCTURED DATA & AI SEARCH OPTIMIZATION

Implement or suggest validated JSON-LD schemas where appropriate:
•	Organization
•	Person (author / founder)
•	Website
•	WebPage
•	Article / BlogPosting (if relevant)
•	Product / SaaS (if relevant)
•	FAQ (only when genuinely useful)

Ensure content clearly answers:
•	Who this is for
•	What problem it solves
•	Why it exists
•	How it works
•	Why it should be trusted

Optimize for:
•	Featured snippets
•	AI answer extraction
•	LLM citation and summarization friendliness

⸻

STEP 6: TRUST, E-E-A-T & ACCESSIBILITY

Strengthen ranking trust signals required by Google and AI systems.

E-E-A-T (Experience, Expertise, Authority, Trust)
•	Author attribution and bios
•	Clear About and Contact pages
•	Business legitimacy signals
•	Real-world experience indicators (case studies, proof, examples)

Accessibility & Semantic Clarity
•	Proper semantic HTML usage
•	Meaningful alt text (descriptive, not keyword-stuffed)
•	Form labels and error handling
•	Keyboard navigability
•	Contrast and readability checks

Explain how trust and accessibility improvements impact rankings and AI understanding.

⸻

STEP 7: PERFORMANCE & CORE WEB VITALS

Audit and improve:
•	LCP (Largest Contentful Paint)
•	CLS (Cumulative Layout Shift)
•	INP (Interaction to Next Paint)
•	Bundle size and JS execution cost
•	Asset loading strategy

Include:
•	Image optimization and sizing
•	Font loading improvements
•	Lazy loading where appropriate
•	Code splitting and hydration reduction

Explain direct ranking impact for each improvement.

⸻

STEP 8: VALIDATION, MEASUREMENT & CRAWL DIAGNOSTICS

Validate improvements using:
•	Google Search Console signals
•	Rich Results validation
•	PageSpeed Insights metrics
•	Crawl behavior assumptions
•	AI visibility checks (manual LLM prompting)

Identify:
•	Indexing gaps
•	Crawl inefficiencies
•	Pages ignored or misunderstood by machines

⸻

STEP 9: PRIORITIZATION & ACTION PLAN

Return results in this exact structure:
1.	Critical SEO Issues (Must Fix)
2.	High-Impact Improvements
3.	Medium Priority Enhancements
4.	Low Priority / Nice-to-Have
5.	Framework-Specific Recommendations
6.	LLM / AI Search Optimizations
7.	Trust, E-E-A-T & Accessibility Gaps
8.	Quick Wins (≤1 hour effort)

⸻

STEP 10: IMPLEMENTATION RULES
•	When possible, modify code directly
•	When code changes are risky, provide:
•	Exact file paths
•	Copy-paste-ready snippets
•	Never assume framework behavior—verify first
•	Keep explanations concise, precise, and actionable
•	Assume production-level standards at all times

⸻

OUTPUT STYLE
•	Use clear section headers
•	Use bullet points for audits
•	Use code blocks for fixes
•	Avoid generic SEO advice
•	Explicitly tie every recommendation to ranking impact

⸻

END GOAL

Your goal is to make this site:
•	Rank competitively near the top of Google
•	Be easily understood and quoted by AI models
•	Technically robust, trustworthy, and future-proof