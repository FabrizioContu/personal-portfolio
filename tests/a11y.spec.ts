import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import type { Result } from "axe-core";

// Every public route must pass WCAG 2.1 A + AA. This is the guarantee: the
// redesign is not "done" until this is green. Contrast (cream + terracotta) is
// the main risk — tune the tokens in tailwind.config until these pass.
const routes = ["/es/", "/en/"];

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"];

function formatViolations(violations: Result[]): string {
  if (violations.length === 0) return "No violations";
  return violations
    .map((v) => {
      const targets = v.nodes
        .map((n) => `    → ${n.target.join(" ")}`)
        .join("\n");
      return `[${v.impact}] ${v.id}: ${v.help}\n  ${v.helpUrl}\n${targets}`;
    })
    .join("\n\n");
}

for (const route of routes) {
  test(`${route} cumple WCAG 2.1 AA`, async ({ page }) => {
    await page.goto(route);
    await page.waitForLoadState("networkidle");

    const results = await new AxeBuilder({ page })
      .withTags(WCAG_TAGS)
      .analyze();

    expect(
      results.violations,
      `\nViolaciones WCAG en ${route}:\n\n${formatViolations(results.violations)}\n`,
    ).toEqual([]);
  });
}
