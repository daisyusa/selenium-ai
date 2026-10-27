# Alumnium browser testing examples

This project contains examples of using [Alumnium](https://alumnium.ai/ , https://github.com/alumnium-hq/alumnium/ ) with
Playwright and Selenium WebDriver.

## Requirements

- Node.js 22.15 or newer
- npm
- Chromium for the Playwright example
- An OpenAI API key (API usage may incur charges)

Alumnium sends requests to the configured model provider. A ChatGPT
subscription does not include API usage.

## Setup

Install the project dependencies:

```bash
npm install
```

Create an API key in the [OpenAI Platform](https://platform.openai.com/api-keys),
then export it in your terminal. This sets it for the current terminal session:

```bash
export OPENAI_API_KEY="your-api-key"
```

Keep the key private. Do not paste it into source files or commit it to the
repository.

Install Playwright's Chromium browser:

```bash
npx playwright install chromium
```

## Run the Playwright example

The Playwright example searches YouTube for "lofi beats" and checks the results.
Run it in Chromium with:

```bash
npx playwright test tests/playwright.spec.ts --project=chromium
```

The test needs an internet connection and a valid `OPENAI_API_KEY`. To view the
HTML report after a run:

```bash
npx playwright show-report
```

## Selenium example

`tests/selenium.spec.ts` is a standalone Selenium WebDriver script, not a
Playwright test. Before running it, remove the placeholder
`process.env.OPENAI_API_KEY = "..."` line; it would overwrite the key exported
in your terminal. It also requires Chrome and a TypeScript runner. To install
`tsx` and run the script:

```bash
npm install --save-dev tsx
npx tsx tests/selenium.spec.ts
```

## Other Selenium AI tool

refer to https://github.com/angiejones/mcp-selenium for another MCP Selenium server
