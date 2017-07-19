# `markdown-decorator`

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![License][license-image]][license-url]
> A lightweight utility for inserting text into markdown files and templates.

## 1. Table of contents

- [1. Table of contents](#1-table-of-contents)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)
	- [3.1. Pass a markdown string to its constructor](#31-pass-a-markdown-string-to-its-constructor)
	- [3.2. Insert your product's (semantic) version](#32-insert-your-products-semantic-version)
	- [3.3. Generate a table of contents](#33-generate-a-table-of-contents)
	- [3.4. Method chaining](#34-method-chaining)
	- [3.5. Templates](#35-templates)
	- [3.6. Save the markdown to file](#36-save-the-markdown-to-file)
- [4. Version and CHANGELOG](#4-version-and-changelog)
- [5. License](#5-license)


## 2. Installation

```sh
$ npm install --save markdown-decorator
```

## 3. Usage

### 3.1. Pass a markdown string to its constructor

```js
const MarkdownDecorator = require('markdown-decorator')
const fs = require('fs')
const pkg = require('./package')

const decorator = new MarkdownDecorator(fs.readFileSync('README.md'))

```

### 3.2. Insert your product's (semantic) version

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

### 3.3. Generate a table of contents

Use `toc` comment tags as delimiters:

```text
## Table of contents

<!-- toc -->
<!-- tocend -->
```

```js
decorator.toc(markdown)
```

### 3.4. Method chaining

```js
const md = decorator
  .semver(pkg.version)
  .toc(markdown)
  .toString()
```

### 3.5. Templates

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

### 3.6. Save the markdown to file  

```js
decorator.decorate({
  version: '1.0.0'
  template,
  header: '# TEMPLATE HEADER',
  body: decorator.markdown,
  footer: 'TEMPLATE FOOTER'
}).save('NOTICE.md')
```

## 4. Version and CHANGELOG

`markdown-decorator` is at <!-- semver -->[`v1.0.0`](./CHANGELOG.md)<!-- semverend -->. Please see the [CHANGELOG](./CHANGELOG.md) for details.

## 7. Contributing

[![PRs Welcome][makeapullrequest-image]][makeapullrequest-url] We welcome contributors and pull requests. Check out the guidelines for

* [Contributing to `generator-apiproxy`](./.github/CONTRIBUTING.md) and our
* [Contributor Covenant Code of Conduct][code-of-conduct-url].

Contributions are stories with a beginning, a middle, and an end, all told through issues, comments, commit logs, and pull requests.

 * [Peruse open issues][issues-url] or
 * [Open a new pull request (PR)][pr-url]

## 6. License

[![License][license-image]][license-url] © [Greg Swindle](https://github.com/gregswindle)

[code-of-conduct-url]: ./.gihub/CODE_OF_CONDUCT.md
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
