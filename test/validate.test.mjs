import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

test('package.json structure and exports', () => {
  const pkgPath = path.join(rootDir, 'package.json');
  assert.ok(fs.existsSync(pkgPath), 'package.json must exist');

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  assert.equal(pkg.name, 'dsh-preset-pi');
  assert.equal(pkg.type, 'module');
  assert.equal(pkg.license, 'MIT');
  assert.ok(pkg.version, 'must have version');
  assert.ok(pkg.author, 'must have author');
  assert.ok(pkg.repository?.url, 'must have repository url');

  // DSH bundle configuration
  assert.ok(pkg.dsh?.bundle?.patch, 'must declare dsh.bundle.patch');
  assert.ok(fs.existsSync(path.join(rootDir, pkg.dsh.bundle.patch)), 'dsh.bundle.patch target file must exist');

  // Exports mapping
  assert.ok(pkg.exports, 'must declare exports');
  assert.equal(pkg.exports['./package.json'], './package.json');
  assert.equal(pkg.exports['./cordis.patch.yml'], './cordis.patch.yml');
  assert.equal(pkg.exports['./locale/*.json'], './locale/*.json');
  assert.equal(pkg.exports['./icon'], './icon.svg');

  // Verify all declared files exist
  assert.ok(Array.isArray(pkg.files), 'files must be an array');
  for (const file of pkg.files) {
    const target = path.join(rootDir, file);
    assert.ok(fs.existsSync(target), `file declared in files array must exist: ${file}`);
  }
});

test('locale files conform to DSH schema', () => {
  const locales = ['en.json', 'id.json'];

  for (const loc of locales) {
    const locPath = path.join(rootDir, 'locale', loc);
    assert.ok(fs.existsSync(locPath), `locale/${loc} must exist`);

    const data = JSON.parse(fs.readFileSync(locPath, 'utf8'));
    assert.ok(data.meta, `${loc} must contain meta wrapper`);
    assert.ok(typeof data.meta.title === 'string' && data.meta.title.length > 0, `${loc} must have meta.title`);
    assert.ok(typeof data.meta.description === 'string' && data.meta.description.length > 0, `${loc} must have meta.description`);
  }
});

test('cordis.patch.yml contains full Pi preset loadout', () => {
  const patchPath = path.join(rootDir, 'cordis.patch.yml');
  assert.ok(fs.existsSync(patchPath), 'cordis.patch.yml must exist');

  const content = fs.readFileSync(patchPath, 'utf8');

  // Structure check
  assert.doesNotMatch(content, /^- insert:/m, 'must override the shipped preset instead of registering a duplicate');
  assert.match(content, /^- id: preset-pi\s*$/m, 'must target the shipped Pi entry');
  assert.match(content, /id: preset-pi\b/, 'must declare preset-pi');
  assert.match(content, /name: ['"]?@deepseek-ai\/dsh-agent-preset['"]?/, 'must use dsh-agent-preset');
  assert.match(content, /id: pi\b/, 'preset config id must be pi');
  assert.match(content, /name: Pi\b/, 'preset config name must be Pi');

  // Persona & Instructions
  assert.match(content, /id: persona/, 'must include persona plugin');
  assert.match(content, /You are a coding assistant running inside pi/, 'must have pi persona prompt');
  assert.match(content, /id: agent-instructions/, 'must include agent-instructions for AGENTS.md');

  // Toolset
  assert.match(content, /id: tool-bash/, 'must include tool-bash');
  assert.match(content, /id: tool-pwsh/, 'must include tool-pwsh');
  assert.match(content, /id: tool-fs/, 'must include tool-fs');
  assert.match(content, /editStyle: pi/, 'tool-fs must use native Pi editStyle');
  assert.match(content, /id: tool-fs-search/, 'must include tool-fs-search for find and grep');
  assert.match(content, /find: true/, 'tool-fs-search must enable find');
  assert.match(content, /id: tool-web/, 'must include tool-web with search & fetch');
  assert.match(content, /id: tool-jobs/, 'must include tool-jobs for background execution');
  assert.match(content, /completionDelivery: quiet/, 'tool-jobs must use quiet completion');

  // Skills
  assert.match(content, /id: skill-filesystem/, 'must include skill-filesystem');
  assert.match(content, /\.pi\/skills/, 'skill-filesystem must scan .pi/skills');
  assert.match(content, /id: tool-skill/, 'must include tool-skill');

  // Delegation
  assert.match(content, /id: delegation/, 'must include delegation group');
  assert.match(content, /id: tool-subagent/, 'must include tool-subagent');
  assert.match(content, /id: tool-workflow/, 'must include tool-workflow');

  // Compaction
  assert.match(content, /id: compaction/, 'must include compaction group');
  assert.match(content, /id: compaction-basic/, 'must include compaction-basic');
  assert.match(content, /id: command-compact/, 'must include command-compact');
  assert.match(content, /id: tool-result-pruner/, 'must include tool-result-pruner');
});

test('icon.svg is valid and within size limits', () => {
  const iconPath = path.join(rootDir, 'icon.svg');
  assert.ok(fs.existsSync(iconPath), 'icon.svg must exist');

  const stat = fs.statSync(iconPath);
  assert.ok(stat.size < 256 * 1024, 'icon size must be under 256 KiB');

  const content = fs.readFileSync(iconPath, 'utf8');
  assert.match(content, /<svg[^>]*>/, 'must contain valid SVG root tag');
  assert.match(content, /viewBox=/, 'SVG must have viewBox');
});
