# Beak Insights website

## Publishing an Insight

1. Create `content/insights/your-article-slug.mdx`. The filename becomes the URL `/insights/your-article-slug`.
2. Add the frontmatter shown below and write the article beneath it using MDX. Do not put an H1 in the body; the page uses the title for its H1.
3. Run `corepack pnpm build` before submitting the change. Commit the file to publish with the next deployment.

```mdx
---
title: "A specific headline"
description: "One or two sentences for cards, search and social previews."
topic: "informatics-and-data"
topicLabel: "Informatics & Data"
type: "Guide"
date: "2026-09-25"
updated: "2026-09-25"
author: "Beak Insights"
caseSlug: "beakdash"
order: 1
---

An introduction in plain Markdown.

## A useful section heading

Lists, links, quotes, Markdown tables, images and code blocks can be used here.

<InsightCallout>Put a key observation here.</InsightCallout>

Read the related <CaseStudyLink slug="beakdash" />.
```

`caseSlug` and `order` are optional. The topic must be a service slug in `content/services.ts`; the type must be `Brief`, `Guide`, or `Research`. Dates use quoted `YYYY-MM-DD` values. The listing sorts newest first, then by `order` within a date. Keep editorial MDX in the repository: MDX can execute JavaScript during compilation, so review article changes like code.

Article metadata drives the Insights index and filters, home page, service links, search results, static article routes, SEO metadata, and sitemap. The article page renders its body as MDX.
