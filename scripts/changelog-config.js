'use strict'

/*
 * Config for conventional-changelog-cli (used by bumped-changelog).
 *
 * Problem: `conventional-changelog` calls `git-semver-tags`, which runs
 * `git log --decorate` and therefore only sees tags reachable from HEAD.
 * With a git flow where hotfix tags live only on `master`, those tags
 * are invisible when the release branch is cut from `dev`, and the
 * generated CHANGELOG ends up covering commits that already shipped.
 *
 * Fix: list ALL tags with `git tag -l`, pick the latest semver tag
 * regardless of ancestry, and feed it to conventional-changelog via
 * `gitRawCommitsOpts.from`.
 */

const { execSync } = require('child_process')

function pickLatestSemverTag () {
  const raw = execSync('git tag -l', { encoding: 'utf8' })
  const semver = /^v?(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?$/

  const tags = raw
    .split('\n')
    .map(t => t.trim())
    .filter(Boolean)
    .map(t => {
      const m = t.match(semver)
      if (!m) return null
      return {
        tag: t,
        major: parseInt(m[1], 10),
        minor: parseInt(m[2], 10),
        patch: parseInt(m[3], 10),
        pre: m[4] || ''
      }
    })
    .filter(Boolean)

  if (tags.length === 0) return null

  tags.sort((a, b) => {
    if (a.major !== b.major) return b.major - a.major
    if (a.minor !== b.minor) return b.minor - a.minor
    if (a.patch !== b.patch) return b.patch - a.patch
    // a stable release (no prerelease) sorts higher than a prerelease
    if (!a.pre && b.pre) return -1
    if (a.pre && !b.pre) return 1
    return a.pre < b.pre ? 1 : a.pre > b.pre ? -1 : 0
  })

  return tags[0].tag
}

const from = pickLatestSemverTag()

module.exports = {
  gitRawCommitsOpts: from ? { from } : {},
  writerOpts: from
    ? {
        finalizeContext: function (context) {
          context.previousTag = from
          if (!context.currentTag && context.version) {
            context.currentTag = context.version
          }
          if (context.previousTag && context.currentTag) {
            context.linkCompare = true
          }
          return context
        }
      }
    : {}
}
