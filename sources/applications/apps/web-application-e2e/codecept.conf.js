const path = require('path');

const REPORTS_PATH = path.join(process.cwd(), 'reports', 'apps', 'web-application');

exports.config = {
  output: path.join(REPORTS_PATH, 'codecept'),
  helpers: {
    Puppeteer: {
      url: process.env.APPLICATION_URL,
      chrome: {
        executablePath: process.env.CHROME_BIN
      },
      waitForAction: 500,
      waitForTimeout: 5000
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
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          verbose: false,
          steps: true
        }
      },
      'mocha-junit-reporter': {
        stdout: '-',
        options: {
          mochaFile: path.join(REPORTS_PATH, 'mocha', 'report.xml')
        }
      },
      mochawesome: {
        stdout: '-',
        options: {
          reportDir: path.join(REPORTS_PATH, 'mochawesome'),
          inlineAssets: true,
          reportPageTitle: 'E2E Test Reports',
          reportTitle: 'E2E Test Reports',
          reportFilename: 'report'
        }
      }
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/step_definitions.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: false
    },
    autoDelay: {
      enabled: true
    },
    stepByStepReport: {
      enabled: false,
      animateSlides: false,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      output: path.join(REPORTS_PATH, 'codecept')
    }
  },
  tests: './*_test.js',
  timeout: 1000,
  name: 'web-application'
};
