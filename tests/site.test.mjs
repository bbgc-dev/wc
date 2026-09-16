import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const html = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const app = readFileSync(new URL("../dist/app.js", import.meta.url), "utf8");
const catalogSource = readFileSync(
  new URL("../dist/catalog.js", import.meta.url),
  "utf8",
);

const context = { window: {} };
vm.runInNewContext(catalogSource, context);
const catalog = context.window.COMMON_GROUND_CATALOG;

test("the catalog provides five category pages and fifteen detail entries", () => {
  assert.equal(catalog.categories.length, 5);
  assert.equal(
    catalog.categories.reduce(
      (count, category) => count + category.products.length,
      0,
    ),
    15,
  );
});

test("the menu links to every category route", () => {
  for (const category of catalog.categories) {
    assert.match(html, new RegExp(`#/category/${category.id}`));
  }
});

test("every category has a distinct product image in the site bundle", () => {
  const images = catalog.categories.map((category) => category.image);
  assert.equal(new Set(images).size, catalog.categories.length);
  for (const image of images) {
    const assetUrl = new URL(`../dist/${image.replace("./", "")}`, import.meta.url);
    assert.equal(existsSync(assetUrl), true, `missing image: ${image}`);
  }
});

test("category and product routes share saved browsing state", () => {
  assert.match(app, /parts\[0\] === "category"/);
  assert.match(app, /parts\[0\] === "product"/);
  assert.match(app, /localStorage\.setItem\(storageKey/);
  assert.match(app, /recentProductIds/);
});

test("the full-screen menu supports explicit and keyboard closing", () => {
  assert.match(html, /id="menu-close"/);
  assert.match(app, /event\.key === "Escape"/);
  assert.match(app, /aria-expanded/);
});

test("visitor-facing content remains informational", () => {
  const visibleSource = `${html}\n${app}\n${catalogSource}`;
  assert.doesNotMatch(
    visibleSource,
    /buy now|add to cart|checkout|place order|delivery request/i,
  );
  assert.doesNotMatch(
    visibleSource,
    /fictional|demonstration|concept identity|client details pending/i,
  );
});
