#!/usr/bin/env node
require('module-alias/register')
const invalidate = require('invalidate-module')

const options = require('@playground').options
let raf = require('@playground').raf
const runner = require('@runner')(options, o => raf(o))

require('chokidar')
  .watch('./playground.js')
  .on('change', () => {
    invalidate(require.resolve('@playground'))
    raf = require('@playground').raf
    runner.resume()
  })
