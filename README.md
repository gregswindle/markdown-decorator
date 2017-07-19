# `markdown-decorator`

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Codacy Badge][codacy-image]][codacy-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![License][license-image]][license-url]
> A lightweight utility for inserting text into markdown files and templates.

## Table of contents

<!-- toc -->

- [1. Installation](#1-installation)
- [2. Usage](#2-usage)
  * [2.1. Pass a markdown string to its constructor](#21-pass-a-markdown-string-to-its-constructor)
  * [2.2. Insert your product's (semantic) version](#22-insert-your-products-semantic-version)
  * [2.3. Generate a table of contents](#23-generate-a-table-of-contents)
  * [2.4. Method chaining](#24-method-chaining)
  * [2.5. Templates](#25-templates)
  * [2.6. Insert a string between delimiters](#26-insert-a-string-between-delimiters)
- [3. Version and CHANGELOG](#3-version-and-changelog)
- [4. Contributing](#4-contributing)
- [5. License](#5-license)

<!-- tocstop -->

<!-- tocend -->


## 1. Installation

```sh
$ npm install --save markdown-decorator
```

## 2. Usage

### 2.1. Pass a markdown string to its constructor

```js
const MarkdownDecorator = require('markdown-decorator')
const fs = require('fs')
const pkg = require('./package')

const decorator = new MarkdownDecorator(fs.readFileSync('README.md'))

```

### 2.2. Insert your product's (semantic) version

```text
## Version and CHANGELOG

`markdown-decorator`'s latest version is
<!-- semver -->
<!-- semverend -->.
Please read the [CHANGELOG][changelog-url] for details.
```

```js
// pkg.version === '1.1.0-alpha.1'
decorator.semver(pkg.version)
```

Inserts the semver:

```text
## Version and CHANGELOG

`markdown-decorator`'s latest version is
<!-- semver -->1.1.0-alpha.1<!-- semverend -->.
Please read the [CHANGELOG][changelog-url] for details.
```

### 2.3. Generate a table of contents

Use `toc` comment tags as delimiters:

```text
## Table of contents
<!-- toc -->
<!-- tocend -->
```

```js
decorator.toc(markdown)
```

### 2.4. Method chaining

```js
const md = decorator
  .semver(pkg.version)
  .toc(markdown)
  .toString()
```

### 2.5. Templates

```text
<%= header %>
<%= body %>
---
<%= footer %>
```

Use the `decorate` method with an object literal to insert values in your template:

```js
const md = decorator.decorate({
  version: '1.0.0'
})
.toString({
  template,
  header: '# TEMPLATE HEADER',
  body: decorator.markdown,
  footer: 'TEMPLATE FOOTER'
})
```

### 2.6. Insert a string between delimiters

```text
# `<!-- title --><!-- titleend -->`
```

```js
decorator.insert('markdown-decorator', {
	open: 'title',
	close: 'titleend'
})
decorator.markdown
// => # `<!-- title -->markdown-decorator<!-- titleend -->`
```

## 3. Version and CHANGELOG

`markdown-decorator` is at <!-- semver -->[`v1.0.0`](./CHANGELOG.md)<!-- semverend -->. Please see the [CHANGELOG](./CHANGELOG.md) for details.

## 4. Contributing

[![PRs Welcome][makeapullrequest-image]][makeapullrequest-url] We welcome contributors and pull requests. Check out the guidelines for

* [Contributing to `generator-apiproxy`](./.github/CONTRIBUTING.md) and our
* [Contributor Covenant Code of Conduct][code-of-conduct-url].

Contributions are stories with a beginning, a middle, and an end, all told through issues, comments, commit logs, and pull requests.

 * [Peruse open issues][issues-url] or
 * [Open a new pull request (PR)][pr-url]

## 5. License

[![License][license-image]][license-url] © [Greg Swindle](https://github.com/gregswindle)



[codacy-image]: https://api.codacy.com/project/badge/Grade/be8fc7f9a20f4e178c4fa067a4aad7c7
[codacy-url]: https://www.codacy.com/app/greg_7/markdown-decorator?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gregswindle/markdown-decorator&amp;utm_campaign=Badge_Grade
[code-of-conduct-url]: ./.github/CODE_OF_CONDUCT.md
[coveralls-image]: https://coveralls.io/repos/gregswindle/markdown-decorator/badge.svg
[coveralls-url]: https://coveralls.io/r/gregswindle/markdown-decorator
[daviddm-image]: https://david-dm.org/gregswindle/markdown-decorator.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/gregswindle/markdown-decorator
[issues-url]: (https://github.com/gregswindle/markdown-decorator/issues
[license-image]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat
[license-url]: ./LICENSE
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[makeapullrequest-url]: http://makeapullrequest.com
[new-issue-url]: https://github.com/gregswindle/markdown-decorator/issues/new
[npm-image]: https://badge.fury.io/js/markdown-decorator.svg
[npm-url]: https://npmjs.org/package/markdown-decorator
[pr-course-url]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[pr-url]: https://github.com/gregswindle/markdown-decorator/pulls
[pr-url]: https://github.com/gregswindle/markdown-decorator/pulls
[standard-version-url]: https://github.com/conventional-changelog/standard-version
[travis-image]: https://travis-ci.org/gregswindle/markdown-decorator.svg?branch=master
[travis-url]: https://travis-ci.org/gregswindle/markdown-decorator
