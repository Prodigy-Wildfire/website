// scripts/validate-seo.js
// Run with: node scripts/validate-seo.js
// Checks all MDX blog posts against SEO requirements before publishing

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

const RULES = {
  metaTitleMin: 50,
  metaTitleMax: 60,
  metaDescMin: 140,
  metaDescMax: 160,
  maxKeywordDensity: 0.02,
  minKeywordDensity: 0.01,
  requiredFrontmatter: [
    "title",
    "slug",
    "metaTitle",
    "metaDescription",
    "date",
    "category",
    "country",
    "keywords",
    "featuredImage",
    "featuredImageAlt",
    "author",
  ],
  validCategories: [
    "Homeowner",
    "Developer",
    "Commercial",
    "Insurance",
    "Community",
  ],
  validCountries: ["Australia", "USA", "Canada"],
};

function getFiles() {
  if (!fs.existsSync(INSIGHTS_DIR)) {
    console.error(`Directory not found: ${INSIGHTS_DIR}`);
    process.exit(1);
  }
  return fs
    .readdirSync(INSIGHTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => path.join(INSIGHTS_DIR, f));
}

function countWords(text) {
  return text
    .replace(/[#*_\[\]()>]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

function checkKeywordInFirst100(content, keyword) {
  let words = content
    .replace(/^---[\s\S]*?---/, "")
    .replace(/[#*_\[\]()>]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 0);
  let first100 = words.slice(0, 100).join(" ").toLowerCase();
  return first100.includes(keyword.toLowerCase());
}

function getKeywordDensity(content, keyword) {
  let clean = content
    .replace(/^---[\s\S]*?---/, "")
    .replace(/[#*_\[\]()>]/g, "")
    .toLowerCase();
  let totalWords = countWords(clean);
  let kw = keyword.toLowerCase();
  let kwWords = kw.split(/\s+/).length;
  let count = 0;
  let idx = 0;
  while ((idx = clean.indexOf(kw, idx)) !== -1) {
    count++;
    idx += kw.length;
  }
  return totalWords > 0 ? (count * kwWords) / totalWords : 0;
}

function hasH2WithKeyword(content, keyword) {
  let h2s = content.match(/^## .+$/gm) || [];
  let kw = keyword.toLowerCase();
  return h2s.some((h) => h.toLowerCase().includes(kw) || kw.split(" ").some((w) => h.toLowerCase().includes(w)));
}

function hasInternalLinks(content) {
  let links = content.match(/\]\(\/.+?\)/g) || [];
  return links.length;
}

function hasEmDashes(content) {
  return content.includes("\u2014") || content.includes("\u2013");
}

function checkCannibalization(allPosts) {
  let issues = [];
  let keywordMap = {};
  for (let p of allPosts) {
    let primary = p.data.keywords?.[0];
    if (!primary) continue;
    let key = primary.toLowerCase();
    if (keywordMap[key]) {
      issues.push(
        `CANNIBALIZATION: "${primary}" is primary keyword in both "${keywordMap[key]}" and "${p.data.slug}"`
      );
    } else {
      keywordMap[key] = p.data.slug;
    }
  }
  return issues;
}

function validate() {
  let files = getFiles();
  let allPosts = [];
  let totalIssues = 0;

  console.log("\n========================================");
  console.log("  PRODIGY WILDFIRE SEO VALIDATION");
  console.log("========================================\n");
  console.log(`Found ${files.length} posts in ${INSIGHTS_DIR}\n`);

  for (let file of files) {
    let raw = fs.readFileSync(file, "utf-8");
    let parsed = matter(raw);
    allPosts.push(parsed);
    let d = parsed.data;
    let c = parsed.content;
    let fname = path.basename(file);
    let issues = [];
    let warnings = [];

    // Check required frontmatter
    for (let field of RULES.requiredFrontmatter) {
      if (!d[field]) {
        issues.push(`Missing frontmatter: ${field}`);
      }
    }

    // Check meta title length
    if (d.metaTitle) {
      let len = d.metaTitle.length;
      if (len < RULES.metaTitleMin || len > RULES.metaTitleMax) {
        issues.push(
          `Meta title is ${len} chars (should be ${RULES.metaTitleMin}-${RULES.metaTitleMax})`
        );
      }
    }

    // Check meta description length
    if (d.metaDescription) {
      let len = d.metaDescription.length;
      if (len < RULES.metaDescMin || len > RULES.metaDescMax) {
        issues.push(
          `Meta description is ${len} chars (should be ${RULES.metaDescMin}-${RULES.metaDescMax})`
        );
      }
    }

    // Check category
    if (d.category && !RULES.validCategories.includes(d.category)) {
      issues.push(
        `Invalid category: "${d.category}" (valid: ${RULES.validCategories.join(", ")})`
      );
    }

    // Check country
    if (d.country && !RULES.validCountries.includes(d.country)) {
      issues.push(
        `Invalid country: "${d.country}" (valid: ${RULES.validCountries.join(", ")})`
      );
    }

    // Check primary keyword in first 100 words
    let primary = d.keywords?.[0];
    if (primary && !checkKeywordInFirst100(c, primary)) {
      warnings.push(
        `Primary keyword "${primary}" not found in first 100 words`
      );
    }

    // Check keyword density
    if (primary) {
      let density = getKeywordDensity(c, primary);
      if (density > RULES.maxKeywordDensity) {
        issues.push(
          `Keyword density ${(density * 100).toFixed(1)}% exceeds 2% max for "${primary}"`
        );
      }
      if (density < RULES.minKeywordDensity) {
        warnings.push(
          `Keyword density ${(density * 100).toFixed(1)}% is below 1% for "${primary}"`
        );
      }
    }

    // Check H2 with keyword
    if (primary && !hasH2WithKeyword(c, primary)) {
      warnings.push(`No H2 heading contains primary keyword or its variants`);
    }

    // Check internal links
    let linkCount = hasInternalLinks(c);
    if (linkCount === 0) {
      issues.push("No internal links found");
    }

    // Check for em-dashes
    if (hasEmDashes(c) || hasEmDashes(d.title || "") || hasEmDashes(d.metaTitle || "") || hasEmDashes(d.metaDescription || "")) {
      issues.push("Em-dash found. Replace with comma, period, colon, or parentheses");
    }

    // Check featured image alt text
    if (d.featuredImage && !d.featuredImageAlt) {
      issues.push("Featured image has no alt text");
    }

    // Check keywords array
    if (d.keywords && d.keywords.length < 3) {
      warnings.push(
        `Only ${d.keywords.length} keywords (recommend 3-6)`
      );
    }

    // Print results
    if (issues.length === 0 && warnings.length === 0) {
      console.log(`PASS  ${fname}`);
    } else {
      if (issues.length > 0) {
        console.log(`FAIL  ${fname}`);
        for (let i of issues) console.log(`        ERROR: ${i}`);
        totalIssues += issues.length;
      } else {
        console.log(`WARN  ${fname}`);
      }
      for (let w of warnings) console.log(`        WARN:  ${w}`);
    }
  }

  // Cannibalization check
  let cannib = checkCannibalization(allPosts);
  if (cannib.length > 0) {
    console.log("\n--- CANNIBALIZATION WARNINGS ---");
    for (let c of cannib) {
      console.log(`  ${c}`);
    }
    totalIssues += cannib.length;
  }

  // Summary
  console.log("\n========================================");
  if (totalIssues === 0) {
    console.log("  ALL POSTS PASSED SEO VALIDATION");
  } else {
    console.log(`  ${totalIssues} ISSUE(S) FOUND - FIX BEFORE PUBLISHING`);
  }
  console.log("========================================\n");

  process.exit(totalIssues > 0 ? 1 : 0);
}

validate();
