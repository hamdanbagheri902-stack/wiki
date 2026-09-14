# Wikipedia-Style Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static classic-Wikipedia-style website with a real History of computers article and working client-side search/navigation.

**Architecture:** Pure HTML, CSS, and JavaScript with no server or database. Article content lives in separate HTML files, shared appearance lives in one stylesheet, and search behavior lives in one small JavaScript file that maps article titles to pages.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js built-in test runner for smoke tests.

**Spec:** `/mnt/data/wikisite/docs/superpowers/specs/2026-09-14-wikipedia-style-site-design.md`

## Global Constraints

- Classic old-Wikipedia-inspired visual layout without copying Wikipedia branding or logos.
- Static site only: no login, database, server framework, or build step.
- First article uses real historical information about the history of computers.
- Site must work by opening `index.html` locally in a modern browser.
- Search must navigate to known local articles and show a clear message for unknown terms.
- Keep project easy to rename and extend with more article pages.

---

### Task 1: Project shell and smoke tests

**Files:**
- Create: `package.json`
- Create: `tests/site.test.js`
- Create: `index.html`

**Interfaces:**
- Produces: root `index.html` with `#site-title`, `#search-input`, `#search-button`, `.sidebar`, `.article`.

- [ ] **Step 1: Write the failing test**

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('main page has the core wiki layout', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert.match(html, /id="site-title"/);
  assert.match(html, /id="search-input"/);
  assert.match(html, /class="sidebar"/);
  assert.match(html, /class="article"/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.js`
Expected: FAIL because `index.html` does not exist.

- [ ] **Step 3: Write minimal implementation**

Create a valid `index.html` containing those required elements and links to `styles.css` and `script.js`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/site.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add package.json tests/site.test.js index.html
git commit -m "test: add wiki site shell"
```

### Task 2: Classic wiki styling

**Files:**
- Create: `styles.css`
- Modify: `tests/site.test.js`

**Interfaces:**
- Produces: shared classes `.sidebar`, `.article`, `.infobox`, `.toc`, `.top-tabs`, `.footer`.

- [ ] **Step 1: Write the failing test**

Add a test that reads `styles.css` and asserts those selectors exist.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.js`
Expected: FAIL because `styles.css` does not exist.

- [ ] **Step 3: Write minimal implementation**

Implement responsive old-wiki-inspired layout, typography, blue links, bordered infobox, table of contents, sidebar, tabs, and mobile fallback.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/site.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add styles.css tests/site.test.js
git commit -m "feat: add classic wiki styling"
```

### Task 3: Real History of computers article

**Files:**
- Create: `history-of-computers.html`
- Modify: `index.html`
- Modify: `tests/site.test.js`

**Interfaces:**
- Produces: article page with title `History of computers`, sections `Early calculating devices`, `Mechanical computers`, `Electronic computers`, `Personal computers`, `Internet era`, and `References`.

- [ ] **Step 1: Write the failing test**

Add assertions for the article title and required section headings.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.js`
Expected: FAIL because the article page is missing.

- [ ] **Step 3: Write minimal implementation**

Create the article using concise factual historical text about abacuses, Pascal, Babbage, Ada Lovelace, ENIAC, transistors, integrated circuits, microprocessors, personal computers, and the web. Add a contents box, infobox, references section, and internal links.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/site.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add history-of-computers.html index.html tests/site.test.js
git commit -m "feat: add history of computers article"
```

### Task 4: Working local search

**Files:**
- Create: `script.js`
- Modify: `tests/site.test.js`

**Interfaces:**
- Produces: `normalizeQuery(value)` and `articleMap` containing `history of computers -> history-of-computers.html`; browser submit/click navigation.

- [ ] **Step 1: Write the failing test**

Add assertions that `script.js` contains the article mapping and handles the search form/button.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.js`
Expected: FAIL because `script.js` is missing.

- [ ] **Step 3: Write minimal implementation**

Implement normalized case-insensitive exact-title search. Navigate to the mapped article when found; otherwise display an inline “No local article found” message.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/site.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add script.js tests/site.test.js
git commit -m "feat: add local article search"
```

### Task 5: Final verification and distributable archive

**Files:**
- Create: `README.md`

**Interfaces:**
- Produces: clear local-open instructions and ZIP containing the static site.

- [ ] **Step 1: Write the failing test**

Add a test requiring README to mention opening `index.html` and editing article pages.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.js`
Expected: FAIL because README is missing.

- [ ] **Step 3: Write minimal implementation**

Document how to open the site, add pages, update search mapping, and later connect a `.org` domain when hosted.

- [ ] **Step 4: Run full verification**

Run: `node --test tests/site.test.js`
Expected: all tests PASS.

- [ ] **Step 5: Commit and archive**

```bash
git add README.md tests/site.test.js
git commit -m "docs: add wiki site instructions"
zip -r /mnt/data/wikipedia-style-site.zip . -x '.git/*'
```
