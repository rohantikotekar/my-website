import { test } from "node:test";
import assert from "node:assert/strict";
import { contactSchema } from "./contact";

const valid = {
  name: "Jane Hiker",
  email: "jane@example.com",
  subject: "Let's work together",
  message: "I would love to chat about an AI engineering role.",
};

test("accepts a fully valid submission", () => {
  assert.equal(contactSchema.safeParse(valid).success, true);
});

test("treats subject as optional (omitted or empty string)", () => {
  const { subject, ...noSubject } = valid;
  void subject;
  assert.equal(contactSchema.safeParse(noSubject).success, true);
  assert.equal(contactSchema.safeParse({ ...valid, subject: "" }).success, true);
});

test("rejects a missing or too-short name", () => {
  assert.equal(contactSchema.safeParse({ ...valid, name: "" }).success, false);
  assert.equal(contactSchema.safeParse({ ...valid, name: "J" }).success, false);
});

test("rejects invalid email addresses", () => {
  const bad = [
    "",
    "notanemail",
    "missing-at-symbol.com",
    "two@@at.com",
    "@nodomain.com",
    "trailing@",
    "spaces here@x.com",
  ];
  for (const email of bad) {
    assert.equal(
      contactSchema.safeParse({ ...valid, email }).success,
      false,
      `expected ${JSON.stringify(email)} to be rejected`
    );
  }
});

test("accepts well-formed email addresses", () => {
  for (const email of ["jane@example.com", "a.b+tag@sub.domain.co"]) {
    assert.equal(
      contactSchema.safeParse({ ...valid, email }).success,
      true,
      `expected ${JSON.stringify(email)} to be accepted`
    );
  }
});

test("rejects a too-short message", () => {
  assert.equal(contactSchema.safeParse({ ...valid, message: "short" }).success, false);
});

test("rejects fields that exceed length limits", () => {
  assert.equal(contactSchema.safeParse({ ...valid, name: "x".repeat(101) }).success, false);
  assert.equal(contactSchema.safeParse({ ...valid, message: "x".repeat(5001) }).success, false);
  assert.equal(contactSchema.safeParse({ ...valid, subject: "x".repeat(151) }).success, false);
});

test("trims surrounding whitespace from values", () => {
  const result = contactSchema.safeParse({
    name: "  Jane Hiker  ",
    email: "  jane@example.com  ",
    message: "  I would love to chat about a role.  ",
  });
  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.name, "Jane Hiker");
    assert.equal(result.data.email, "jane@example.com");
  }
});
