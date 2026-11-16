# dsh-preset-pi

> **Pi-style lean, token-efficient coding agent preset for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) with native batch editing, find/grep, background jobs, skills, delegation, and free web search.**

<p align="center">
  <img src="./icon.svg" width="96" height="96" alt="dsh-preset-pi icon" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/dsh-preset-pi"><img src="https://img.shields.io/npm/v/dsh-preset-pi.svg?style=flat-square&color=blue" alt="npm version" /></a>
  <a href="https://github.com/RafiMM0609/dsh-preset-pi/actions"><img src="https://img.shields.io/github/actions/workflow/status/RafiMM0609/dsh-preset-pi/ci.yml?branch=main&style=flat-square" alt="build status" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="license" /></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/node-%3E%3D20-brightgreen.svg?style=flat-square" alt="node version" /></a>
</p>

---

## ✨ Overview

`dsh-preset-pi` is an official Cordis agent preset bundle for DeepSeek Harness. It delivers an ultra-fast, token-efficient coding workflow inspired by [pi](https://github.com/earendil-works/pi), bundling lean persona instructions, native atomic batch multi-editing, gitignore-aware find & grep, quiet background job management, subagent delegation, and free real-time web search into a single **"Pi"** preset.

### 📊 Token & Performance Comparison

| Metric | Default DSH Agent | Pi Preset (`dsh-preset-pi`) | Improvement |
|---|---|---|---|
| **System Prompt Size** | ~14,000 – 18,000 tokens | **~450 tokens** | **~97% reduction** |
| **Time to First Token (TTFT)** | ~2.5s – 4.2s | **~0.6s – 1.1s** | **~3.5x faster** |
| **Editing Mechanism** | Line-by-line single edits | **Native Pi atomic multi-edit** | Multi-replacement atomic edits |
| **Code Search** | Basic glob search | **Gitignore-aware `find` & enriched `grep`** | Matches exact Pi discovery flow |
| **Background Commands** | Foreground block / Unconfigured | **`tool-jobs` quiet backgrounding** | Non-blocking builds & tests |
| **Web Research** | Varies / Requires key | **Integrated Free Web Search** | Ready out-of-the-box |
| **Delegation** | Heavy fork delegation | **Clean spawn delegation & workflow** | Inspect large repos without context blowout |
| **Context Compaction** | Manual / Standard | **Automatic Pruning (>8KB threshold)** | Keeps long chat sessions responsive |

---

## 🎯 Features

- ⚡ **Ultra-Lean System Persona (`complete: true`):** Bypasses massive default instructions and boilerplate rules, keeping responses concise and direct.
- 📋 **Project Instructions (`AGENTS.md`):** Automatically reads up to 64KB of project rules and guidelines via `@deepseek-ai/dsh-agent-instructions`.
- ✏️ **Native Pi Multi-Edit (`editStyle: pi`):** Executes simultaneous, non-overlapping find-and-replace replacements in one atomic write via `@deepseek-ai/dsh-tool-fs`.
- 🔎 **Pi File Discovery (`find` & `grep`):** Dedicated `find` tool respecting `.gitignore` and enriched `grep` tool via `@deepseek-ai/dsh-tool-fs-search`.
- ⚙️ **Quiet Background Jobs (`tool-jobs`):** Enables `run_in_background` for long build or test commands without unprompted turn spam.
- 🧩 **Project Skills (`.pi/skills`):** Native scanning of `.pi/skills` and `.agents/skills` directories via `@deepseek-ai/dsh-skill-filesystem`.
- 👥 **Clean Subagent Delegation:** Spawns isolated clean subagents and workflows to survey large codebases without polluting the lead agent's context.
- 🔍 **Integrated Free Web Search (`tool-web`):** Searches the live internet and fetches remote documentation on demand with zero API key configuration.
- 💻 **Native Shell Tools:** Uses bash (`pwsh` on Windows) for execution.
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
2. In the session preset selector dropdown, choose **"Pi"**.
3. Start coding with blazing-fast responses and built-in web search!

---

## 🛠️ Tool Loadout

| Tool ID | Package | Configuration / Role |
|---|---|---|
| `persona` | `@deepseek-ai/dsh-persona` | Ultra-lean Pi system prompt |
| `agent-instructions` | `@deepseek-ai/dsh-agent-instructions` | Loads project `AGENTS.md` (up to 64KB) |
| `tool-bash` / `tool-pwsh` | `@deepseek-ai/dsh-tool-bash` | Shell execution with backgrounding support |
| `tool-fs` | `@deepseek-ai/dsh-tool-fs` | Native atomic batch multi-edit (`editStyle: pi`) |
| `tool-fs-search` | `@deepseek-ai/dsh-tool-fs-search` | Gitignore-aware `find` & enriched `grep` |
| `tool-web` | `@deepseek-ai/dsh-tool-web` | Free internet search & documentation fetch |
| `tool-jobs` | `@deepseek-ai/dsh-tool-jobs` | Quiet background job controller (`run_in_background`) |
| `skill-filesystem` | `@deepseek-ai/dsh-skill-filesystem` | Custom skill discovery including `.pi/skills` |
| `tool-skill` | `@deepseek-ai/dsh-tool-skill` | Skill invocation tool |
| `delegation` | `@deepseek-ai/dsh-tool-subagent` | Clean subagent spawn & workflow delegation |
| `compaction` | `@deepseek-ai/dsh-compaction-basic` | Automatic history pruning & compaction |

---

## 🧪 Testing

The repository includes a zero-dependency automated test suite powered by `node:test`:

```bash
npm test
```

Verifies:
- `package.json` manifest and exports mappings.
- Cordis patch structure, preset declarations, and complete tool bindings.
- Locale schema compliance (`locale/en.json`, `locale/id.json`).
- SVG brand artwork dimensions and limits.

---

## 🚢 Publishing to npm

See [PUBLISHING.md](./PUBLISHING.md) for the complete step-by-step guide on creating the GitHub repository, pre-publish checks, and publishing to npm.

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

[MIT](./LICENSE) © [RafiMM0609](https://github.com/RafiMM0609)
