import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const html = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const hero = html.match(/<section class="hero"[\s\S]*?<\/section>/)?.[0] ?? "";

test("the first product surface names all five categories", () => {
  for (const category of [
    "Pre-rolls",
    "Infused wine",
    "Vaporizer formats",
    "Edible formats",
    "Merchandise",
  ]) {
    assert.match(hero, new RegExp(category, "i"));
  }
});

test("the page presents five interactive category guides", () => {
  assert.equal((html.match(/<button[^>]+data-format=/g) ?? []).length, 5);
  assert.equal((hero.match(/<button class="format-card/g) ?? []).length, 5);
});

test("visitor-facing copy contains no prototype disclaimers", () => {
  assert.doesNotMatch(
    html,
    /fictional|demonstration|concept identity|client details pending/i,
  );
});

test("the page remains an information guide rather than a transaction flow", () => {
  assert.doesNotMatch(
    html,
    /buy now|add to cart|checkout|place order|delivery request/i,
  );
});
