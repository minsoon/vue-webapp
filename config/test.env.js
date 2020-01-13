'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_BASE_URL: '"http://gdqa.spazon.com"',
  ANALYTICS_ID: '"UA-122842050-1"',
  GZ_SESSION_KEY: '"qagz%5Fsession%5Fid"',
  GD_SESSION_KEY: '"gdSessionId"',
  PAYMENT_URL: '"http://payqa.spazon.com/Service/MPayAuthForKey.aspx?ServiceID=J21ZKMFCXEMV9LD121I2ONOJ4VVOFZQL"',
  MEMBER_CERT_URL: '"https://m.golfzon.com/member/my/auth/manage"',
  COOKIE_DOMAIN: '".spazon.com"'
})
