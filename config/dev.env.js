'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.live.env.js')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASE_URL: '"http://qa.api.com"',
  SESSION_KEY: '"SessionId"'
})
