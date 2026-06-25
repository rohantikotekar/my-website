import { test } from "node:test";
import assert from "node:assert/strict";
import { rateLimit } from "./rate-limit";

const uniqueKey = () => `test:${Math.random().toString(36).slice(2)}`;

test("allows requests up to the limit, then blocks", () => {
  const key = uniqueKey();
  for (let i = 0; i < 3; i++) {
    assert.equal(rateLimit(key, { limit: 3, windowMs: 60_000 }).ok, true);
  }
  assert.equal(rateLimit(key, { limit: 3, windowMs: 60_000 }).ok, false);
});

test("reports remaining requests correctly", () => {
  const key = uniqueKey();
  assert.equal(rateLimit(key, { limit: 5, windowMs: 60_000 }).remaining, 4);
  assert.equal(rateLimit(key, { limit: 5, windowMs: 60_000 }).remaining, 3);
});

test("isolates limits per key", () => {
  const a = uniqueKey();
  const b = uniqueKey();
  assert.equal(rateLimit(a, { limit: 1, windowMs: 60_000 }).ok, true);
  assert.equal(rateLimit(a, { limit: 1, windowMs: 60_000 }).ok, false);
  // A different key should still be allowed.
  assert.equal(rateLimit(b, { limit: 1, windowMs: 60_000 }).ok, true);
});

test("resets after the window elapses", () => {
  const key = uniqueKey();
  assert.equal(rateLimit(key, { limit: 1, windowMs: 1 }).ok, true);
  assert.equal(rateLimit(key, { limit: 1, windowMs: 1 }).ok, false);
  const start = Date.now();
  while (Date.now() - start < 5) {
    /* brief spin so the 1ms window definitely passes */
  }
  assert.equal(rateLimit(key, { limit: 1, windowMs: 1 }).ok, true);
});
