# dsh-preset-pi

> **Pi-style lean, token-efficient coding agent presets for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) with free web search and atomic batch editing.**

<p align="center">
  <img src="./icon.svg" width="96" height="96" alt="dsh-preset-pi icon" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/dsh-preset-pi"><img src="https://img.shields.io/npm/v/dsh-preset-pi.svg?style=flat-square&color=blue" alt="npm version" /></a>
  <a href="https://github.com/rafimahrus/dsh-preset-pi/actions"><img src="https://img.shields.io/github/actions/workflow/status/rafimahrus/dsh-preset-pi/ci.yml?branch=main&style=flat-square" alt="build status" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="license" /></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/node-%3E%3D20-brightgreen.svg?style=flat-square" alt="node version" /></a>
</p>

---

## ✨ Overview

`dsh-preset-pi` is an official Cordis agent preset bundle for DeepSeek Harness. It delivers an ultra-fast, token-efficient coding workflow inspired by [pi](https://github.com/earendil-works/pi), packing two purpose-built presets:

1. **Pi (`pi`)**: Pure offline, minimalist coding agent with zero external network access.
2. **Pi (Web Search) (`pi-web`)**: Pi-style coding workflow enhanced with free internet search and web documentation fetching.

### 📊 Token & Performance Comparison

| Metric | Default DSH Agent | Pi Preset (`dsh-preset-pi`) | Improvement |
|---|---|---|---|
| **System Prompt Size** | ~14,000 – 18,000 tokens | **~450 tokens** | **~97% reduction** |
| **Time to First Token (TTFT)** | ~2.5s – 4.2s | **~0.6s – 1.1s** | **~3.5x faster** |
| **Editing Mechanism** | Line-by-line single edits | **Multi-replacement atomic batch** | Faster multi-file refactoring |
| **Context Compaction** | Manual / Standard | **Automatic Pruning (>8KB threshold)** | Eliminates context blowout |

---

## 🎯 Features

- ⚡ **Ultra-Lean System Persona (`complete: true`):** Bypasses massive default instructions and boilerplate rules, keeping responses concise and direct.
- ✏️ **Atomic Batch Multi-Edit (`dsh-tool-edit-batch`):** Enables simultaneous, multi-chunk find-and-replace edits across files without rewriting full files.
- 🔍 **Integrated Free Web Search (`tool-web` in `pi-web`):** Searches the live internet and fetches remote documentation on demand.
- 💻 **Native Shell Tools:** Uses bash (`pwsh` on Windows) for search and inspection (`rg`, `find`, `ls`, `grep`).
- 🧹 **Context & History Pruner:** Automatically truncates bloated tool outputs (>8,192 characters) to keep long chat sessions responsive.

---

## 📦 Installation

### Option 1: Via DeepSeek Harness Web UI
1. Open DeepSeek Harness Web UI (`http://localhost:3080`).
2. Navigate to **Settings** → **Plugins** → **Add Plugin**.
3. Search for `dsh-preset-pi` (or enter the package name / folder path).
4. Click **Install**.

### Option 2: Via DSH CLI
```bash
# Add to active profile (e.g. web or desktop)
dsh plugin --profile web add dsh-preset-pi
```

*(For local repository development)*:
```bash
dsh plugin --profile web add /path/to/dsh-preset-pi
```

### Option 3: Manual Profile Declaration
Add `dsh-preset-pi` to your profile bundle list in `~/.dsh/profiles/<profile>/package.json`:

```json
{
  "dsh": {
    "profile": {
      "bundles": [
        "dsh-preset-pi"
      ]
    }
  }
}
```

---

## 🚀 How to Use

1. Launch DeepSeek Harness.
2. In the session preset selector dropdown, choose either:
   - **"Pi"** for offline, local code exploration and refactoring.
   - **"Pi (Web Search)"** when you need live search and remote API docs.
3. Start coding!

---

## 🛠️ Included Presets & Tool Loadout

| Tool ID | Package | Included in `pi` | Included in `pi-web` | Description |
|---|---|:---:|:---:|---|
| `persona` | `@deepseek-ai/dsh-persona` | ✅ | ✅ | Lean Pi system prompt |
| `tool-bash` / `tool-pwsh` | `@deepseek-ai/dsh-tool-bash` | ✅ | ✅ | Terminal shell execution |
| `tool-fs` | `@deepseek-ai/dsh-tool-fs` | ✅ | ✅ | Filesystem read and write |
| `tool-edit-batch` | `dsh-tool-edit-batch` | ✅ | ✅ | Multi-replacement batch editor |
| `tool-web` | `@deepseek-ai/dsh-tool-web` | ❌ | ✅ | Internet search & fetch |
| `compaction` | `@deepseek-ai/dsh-compaction-basic` | ✅ | ✅ | History pruner & compaction |

---

## 🧪 Testing

The repository includes a zero-dependency automated test suite powered by `node:test`:

```bash
npm test
```

Verifies:
- `package.json` manifest and exports mappings.
- Cordis patch structure, preset declarations, and tool bindings.
- Locale schema compliance (`locale/en.json`, `locale/id.json`).
- SVG brand artwork dimensions and limits.

---

## 🚢 Publishing to npm

To publish this bundle to the npm registry:

```bash
# 1. Login to your npm account
npm login

# 2. Check the packed tarball contents
npm pack --dry-run

# 3. Publish to npm
npm publish --access public
```

---

## 📄 License

[MIT](./LICENSE) © [rafimahrus](https://github.com/rafimahrus)
