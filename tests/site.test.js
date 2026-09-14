const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

test('main page has the core wiki layout', () => {
  const html = read('index.html');
  assert.match(html, /id="site-title"/);
  assert.match(html, /id="search-input"/);
  assert.match(html, /id="search-button"/);
  assert.match(html, /class="sidebar"/);
  assert.match(html, /class="article"/);
});

test('stylesheet defines classic wiki components', () => {
  const css = read('styles.css');
  for (const selector of ['.sidebar','.article','.infobox','.toc','.top-tabs','.footer']) assert.match(css, new RegExp(selector.replace('.', '\\.')));
});

test('history article contains required real-history sections', () => {
  const html = read('history-of-computers.html');
  for (const text of ['History of computers','Early calculating devices','Mechanical computers','Electronic computers','Personal computers','Internet era','References']) assert.match(html, new RegExp(text));
});

test('search script maps the history article and handles search', () => {
  const js = read('script.js');
  assert.match(js, /history of computers/);
  assert.match(js, /history-of-computers\.html/);
  assert.match(js, /search-form/);
  assert.match(js, /No local article found/);
});

test('README explains how to open and extend the site', () => {
  const md = read('README.md');
  assert.match(md, /index\.html/);
  assert.match(md, /article/i);
  assert.match(md, /\.org/);
});
