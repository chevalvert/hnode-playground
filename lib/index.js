#!/usr/bin/env node
require('module-alias/register')
const invalidate = require('invalidate-module')

const options = require('@playground').options
let raf = require('@playground').raf
const runner = require('@runner')(options, o => raf(o))

require('chokidar')
  .watch('./playground.js')
  .on('change', () => {
    const dateString = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    console.log(`\u001b[30m[${dateString}] playground has changed\u001b[37m`)
    try {
      invalidate(require.resolve('@playground'))
      raf = require('@playground').raf
      runner.resume()
    } catch (error)  {
      console.log(error)
    }
  })
