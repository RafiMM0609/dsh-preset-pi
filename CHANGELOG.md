# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-11-17

### Optimized
- Added strict `Stop condition` to `persona.suffix` preventing redundant post-verification tool calls (cutting over-verification loops and reducing tool calls to ~5 per task).

## [1.0.0] - 2026-11-16

### Added
- Initial release of `dsh-preset-pi`.
- All-in-one lean coding agent preset (`preset-pi`, ID: `pi`) for DeepSeek Harness.
- Short, token-efficient system persona reducing prompt overhead by over ~97%.
- Native multi-file atomic batch editing via `dsh-tool-edit-batch`.
- Free web search and documentation fetch integration via `@deepseek-ai/dsh-tool-web`.
- Full shell execution tools (`@deepseek-ai/dsh-tool-bash` on POSIX, `@deepseek-ai/dsh-tool-pwsh` on Windows).
- Integrated context compaction and tool result pruning (`@deepseek-ai/dsh-compaction-basic`, `@deepseek-ai/dsh-compaction-tool-result-pruner`).
- SVG brand artwork (`icon.svg`).
- Internationalization support for English (`locale/en.json`) and Indonesian (`locale/id.json`).
- Zero-dependency automated test suite using `node:test`.
