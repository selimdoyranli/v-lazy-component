module.exports = {
  types: {
    feat: { title: '🚀 Enhancements', semver: 'minor' },
    perf: { title: '🔥 Performance', semver: 'patch' },
    fix: { title: '🩹 Fixes', semver: 'patch' },
    refactor: { title: '💅 Refactors', semver: 'patch' },
    docs: { title: '📖 Documentation', semver: 'patch' },
    build: { title: '📦 Build', semver: 'patch' },
    types: { title: '🌊 Types', semver: 'patch' },
    chore: { title: '🏡 Chore' },
    examples: { title: '🏀 Examples' },
    test: { title: '✅ Tests' },
    style: { title: '🎨 Styles' },
    ci: { title: '🤖 CI' }
  },
  cwd: null,
  from: '',
  to: '',
  output: 'CHANGELOG.md',
  scopeMap: {},
  tokens: {
    github: process.env.CHANGELOGEN_TOKENS_GITHUB || process.env.GITHUB_TOKEN || process.env.GH_TOKEN
  },
  templates: {
    commitMessage: 'chore(release): v{{newVersion}}',
    tagMessage: 'v{{newVersion}}',
    tagBody: 'v{{newVersion}}'
  }
}
