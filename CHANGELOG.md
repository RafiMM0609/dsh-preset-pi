# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-11-16

### Added
- Initial release of `dsh-preset-pi`.
- Dual presets for DeepSeek Harness:
  - `preset-pi` (`pi`): Minimalist, pure offline coding agent with no external network tools.
  - `preset-pi-web` (`pi-web`): Lean coding agent with integrated free web search & web fetch.
- Native multi-file atomic batch editing via `dsh-tool-edit-batch`.
- Short, token-efficient system persona reducing prompt overhead by over 70%.
- Integrated context compaction and tool result pruning (`@deepseek-ai/dsh-compaction-basic`, `@deepseek-ai/dsh-compaction-tool-result-pruner`).
- SVG brand artwork (`icon.svg`).
- Internationalization support for English (`locale/en.json`) and Indonesian (`locale/id.json`).
- Zero-dependency automated test suite using `node:test`.
