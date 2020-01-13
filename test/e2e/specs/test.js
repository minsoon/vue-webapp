// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .setCookie({
        name: 'gdSessionId',
        value: '3A5431EF0A0340159AD565ED60806B1F6F3E2073C673ACB1027F537409A12E7168484318AFA86560502ACB0290427B1E0B82F34E430750CD25E5AC52387C7DD35EBF7256A67CBC78F79FB2389E5496533FE37E771FCB414C6DC0CBAA9B30DD5AB5D6F1A1C701E1F3AED985ACBAD807BA1D7EDB7361E8AB39D2DF6C365AB7DE5DB13BB014E8ABF8C4B6DB7C3973A14A6D49615785C63DAB832773F581DF6C4C3798CADA0E5685D648BAD476328967B2049769B2',
      })
      .url(devServer)
      .waitForElementVisible('#wrap', 500)
      .assert.elementPresent('.application')
      .waitForElementVisible('.myBenefitsCon', 500)
      .assert.elementPresent('.myBenefitsCon')
      .waitForElementVisible('.myBenefitsCon .profile dl dt a', 500)
      .assert.elementPresent('.myBenefitsCon .profile dl dt a')
      .end()
  }
}
