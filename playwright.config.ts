import { defineConfig, devices } from "@playwright/test";

// Accessibility suite runs against the Astro dev server (no build — see CLAUDE.md).
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: "http://localhost:4321",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:4321/es/",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
