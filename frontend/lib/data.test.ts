import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import {
  profile,
  sections,
  experiences,
  projects,
  research,
  skillCategories,
} from "./data";
import { techIcons } from "./tech-icons";

const publicDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

test("nav/section ids are unique", () => {
  const ids = sections.map((s) => s.id);
  assert.equal(new Set(ids).size, ids.length, "duplicate section id found");
});

test("contact email is the UCR address", () => {
  assert.equal(profile.email, "rtiko001@ucr.edu");
});

test("no placeholder social URLs remain", () => {
  for (const [key, url] of Object.entries(profile.social)) {
    assert.ok(
      !/yourusername|example\.com/.test(url),
      `social.${key} is still a placeholder: ${url}`
    );
    assert.ok(/^https?:\/\//.test(url), `social.${key} is not an absolute URL: ${url}`);
  }
});

test("every skill slug resolves to a brand logo", () => {
  for (const cat of skillCategories) {
    for (const skill of cat.skills) {
      if (skill.slug) {
        assert.ok(
          techIcons[skill.slug],
          `no brand icon for slug "${skill.slug}" (${skill.name})`
        );
      }
    }
  }
});

test("every project links to a real GitHub repo (no '#')", () => {
  for (const p of projects) {
    if (p.github !== undefined) {
      assert.notEqual(p.github, "#", `${p.title} still has a placeholder GitHub link`);
      assert.ok(/^https?:\/\//.test(p.github), `${p.title} GitHub is not a URL: ${p.github}`);
    }
  }
});

test("project media files exist in /public", () => {
  for (const p of projects) {
    if (p.media) {
      const rel = decodeURIComponent(p.media.src.replace(/^\//, ""));
      assert.ok(
        existsSync(join(publicDir, rel)),
        `missing media file for ${p.title}: ${p.media.src}`
      );
    }
  }
});

test("experiences are well-formed and non-empty", () => {
  assert.ok(experiences.length > 0, "no experiences");
  for (const e of experiences) {
    assert.ok(e.role && e.org && e.period, `incomplete experience: ${e.role}`);
    assert.ok(e.bullets.length > 0, `no bullets for ${e.role}`);
  }
});

test("research publications have real (non-placeholder) links", () => {
  assert.ok(research.publications.length > 0, "no publications");
  for (const pub of research.publications) {
    assert.ok(pub.link && pub.link !== "#", `publication "${pub.title}" has a placeholder link`);
  }
});
