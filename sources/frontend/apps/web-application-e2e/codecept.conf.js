const path = require('path');

const REPORTS_PATH = path.join(process.cwd(), 'reports', 'apps', 'web-application');

exports.config = {
  output: path.join(REPORTS_PATH, 'codecept'),
  helpers: {
    Puppeteer: {
      url: 'http://localhost:4200',
      chrome: {
        executablePath: process.env.CHROME_BIN
      }
    },
    Mochawesome: {
      uniqueScreenshotNames: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {
    reporterOptions: {
      reportDir: path.join(REPORTS_PATH, 'mochawesome'),
      inlineAssets: true,
      reportPageTitle: 'E2E Test Reports',
      reportTitle: 'E2E Test Reports'
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    stepByStepReport: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  },
  tests: './*_test.js',
  timeout: 10000,
  name: 'web-application-e2e'
};
