exports.config = {
  tests: './*_test.js',
  output: '../../coverage/web-application-e2e',
  helpers: {
    Puppeteer: {
      url: 'http://localhost'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'web-application-e2e'
}
