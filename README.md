# dsh-preset-pi

> **Pi-style lean coding agent preset for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) with free web search and batch editing.**

<p align="center">
  <img src="./icon.svg" width="96" height="96" alt="dsh-preset-pi icon" />
</p>

## ✨ Overview

`dsh-preset-pi` is an official Cordis agent preset bundle for DeepSeek Harness. It provides an ultra-fast, token-efficient coding workflow inspired by [pi](https://github.com/earendil-works/pi), enhanced with built-in web capabilities.

### Why use this preset?
- ⚡ **Lean System Prompt (`complete: true`):** Bypasses the default bulky ~64KB system prompt sections, saving thousands of tokens per request and speeding up TTFT (Time to First Token).
- 🔍 **Integrated Web Search (`tool-web`):** Allows the model to search the internet (via DuckDuckGo / `dsh-free-search`) and fetch documentation directly without prompt bloat.
- ✏️ **Pi-Style Batch Multi-Edit (`dsh-tool-edit-batch`):** Enables atomic, multi-replacement edits matched against the original file content.
- 💻 **Bash Shell Tools:** Uses direct bash commands (`ls`, `rg`, `find`) for filesystem inspection.
- 🧹 **Automatic Compaction:** Automatically trims oversized tool outputs and prunes history to keep sessions responsive.

---

## 📦 Installation

### Option 1: Via DeepSeek Harness Web UI
1. Open DeepSeek Harness Web (`http://localhost:3080`).
2. Go to **Settings** → **Plugins** → **Add Plugin**.
3. Type `dsh-preset-pi` (or paste the local folder path) and click **Install**.

### Option 2: Via DSH CLI
```bash
dsh plugin --profile web add dsh-preset-pi
```

*(Or for local development testing)*:
```bash
dsh plugin --profile web add /path/to/dsh-preset-pi
```

---

## 🚀 How to Use

1. Start a new session in DeepSeek Harness.
2. In the preset dropdown selector, select **"Pi (Web Search)"**.
3. Enjoy blazing fast responses, precise coding tools, and real-time internet search!

---

## 🛠️ Tool Loadout

| Tool ID | Package | Description |
|---|---|---|
| `tool-bash` | `@deepseek-ai/dsh-tool-bash` | Persistent shell command execution |
| `tool-fs` | `@deepseek-ai/dsh-tool-fs` | Read/write filesystem inspection |
| `tool-edit-batch` | `dsh-tool-edit-batch` | Multi-replacement batch file editor |
| `tool-web` | `@deepseek-ai/dsh-tool-web` | Web search and web fetch integration |
| `compaction` | `@deepseek-ai/dsh-compaction-basic` | History compaction & output pruning |

---

## 🚢 Publishing to npm

If you are developing this plugin and want to publish it:

```bash
# 1. Login to npm
npm login

# 2. Check package files
npm pack --dry-run

# 3. Publish to npm registry
npm publish --access public
```

---

## 📄 License

MIT © [rafimahrus](https://github.com/rafimahrus)
