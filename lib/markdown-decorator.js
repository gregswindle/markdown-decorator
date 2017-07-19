/* eslint security/detect-non-literal-regexp: "warn" */
'use strict'
const _ = require('lodash')
const markdownToc = require('markdown-toc')

const regexFactory = options => {
  const regex = new RegExp(`${options.open}(.*)${options.close}`, 'igm')
  return regex
}

const optionsFactory = options => {
  return {
    open: `<!-- ${options.open} -->`,
    close: `<!-- ${options.close} -->`
  }
}

const replacementFactory = (text, replacement, options) => {
  const regex = regexFactory(options)
  return text.replace(regex, `${options.open}${replacement}${options.close}`)
}

/**
 * MarkdownDecorator inserts markdown text between configurable delimiters and
 * formats output based on lodash erb templates.
 */
class MarkdownDecorator {
  constructor (markdown) {
    this.markdown = markdown.toString()
  }

  decorate (options) {
    this.semver(options.version).toc()
    return this
  }

  insert (text, options) {
    const opts = optionsFactory(options)
    this.markdown = replacementFactory(this.markdown, text, opts)
    return this
  }

  semver (version) {
    return this.insert(version, {
      open: 'semver',
      close: 'semverend'
    })
  }

  toc () {
    this.markdown = markdownToc.insert(this.markdown)
    return this
  }

  toString (options) {
    const opts = options || {}
    if (opts.template) {
      return _.template(opts.template)(options)
    }
    return this.markdown
  }
}

module.exports = MarkdownDecorator
