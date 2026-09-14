# Wikipedia-Style Static History Site Design

## Goal
Build a static encyclopedia-style website inspired by classic Wikipedia. The site will use plain HTML, CSS, and a small amount of JavaScript so it opens directly in a browser and can later be hosted on a `.org` domain.

## First Article
The first article will be **History of computers** and will use real historical facts, not fictional placeholder text.

## Visual Design
- Classic encyclopedia layout with a left navigation sidebar.
- White article canvas with blue links and restrained gray borders.
- Site logo/name area at the upper left.
- Search box in the sidebar/header area.
- Large article title with a thin divider underneath.
- Table of contents near the start of the article.
- Right-side infobox with key dates and milestones.
- Article sections such as Early calculating devices, Mechanical computers, Electronic computers, Personal computers, Internet era, and References.
- Typography and spacing that evoke older Wikipedia without copying Wikipedia branding or logos.

## Behavior
- Static site only: no accounts, database, or article editor.
- Sidebar links navigate between local pages when more pages are added.
- Search field performs simple client-side matching against a small article index and opens a matching page when available.
- Blue internal links are styled like encyclopedia links.
- The article remains readable on smaller screens by stacking the infobox and content.

## Files
- `index.html` — main page / first article shell.
- `styles.css` — full classic encyclopedia styling and responsive layout.
- `script.js` — simple local search behavior.
- `articles.json` — local article title/index data for search.
- `README.md` — how to open locally and later host it.

## Content Rules
- Historical claims should be factual and phrased neutrally.
- Avoid copying long passages from Wikipedia or other sources.
- Include a short references section with reputable sources such as Encyclopaedia Britannica, the Computer History Museum, and institutional/history references.

## Non-Goals
- No login system.
- No article editing interface.
- No database.
- No server required for the first version.
- No use of Wikipedia's logo or exact branding.

## Success Criteria
Opening `index.html` should immediately show a polished old-Wikipedia-like history article page. The page should include real history, a working table of contents, a functional local search box, a right-side infobox, and responsive styling.
