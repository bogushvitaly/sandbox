const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const replace = require('replace-in-file');
const WEB_APPLIATION_ENVIRONMENT_PATH = path.join(process.cwd(), 'libs', 'core', 'environments');
const WEB_APPLIATION_ENVIRONMENT_FILE = path.join(WEB_APPLIATION_ENVIRONMENT_PATH, 'environment.ts');
const DOTENV_CONFIG_FILE = path.join(
  process.cwd(),
  '..',
  '..',
  '..',
  '..',
  'configs',
  'sandbox',
  `.env.${process.env.CI_ENVIRONMENT_NAME}`
);

const DOTENV_DEFAULT_CONFIG_FILE = path.join(process.cwd(), `.env.defaults`);

console.log(DOTENV_DEFAULT_CONFIG_FILE);

require('dotenv-extended').load({
  encoding: 'utf8',
  silent: true,
  path: DOTENV_CONFIG_FILE,
  defaults: DOTENV_DEFAULT_CONFIG_FILE,
  schema: '.env.schema',
  errorOnMissing: false,
  errorOnExtra: false,
  includeProcessEnv: false,
  assignToProcessEnv: true,
  overrideProcessEnv: false
});

shell.cp(path.join(__dirname, 'environment.ts'), WEB_APPLIATION_ENVIRONMENT_PATH);

const options = {
  files: WEB_APPLIATION_ENVIRONMENT_FILE,
  from: [
    /apiKey: '(.*)?'/,
    /authDomain: '(.*)?'/,
    /databaseURL: '(.*)?'/,
    /projectId: '(.*)?'/,
    /storageBucket: '(.*)?'/,
    /messagingSenderId: '(.*)?'/,
    /gaTrackingCode: '(.*)?'/,
    /apiUrl: '(.*)?'/,
    /staticContentServerUrl: '(.*)?'/,
    /googeMapsApiKey: '(.*)?'/
  ],
  to: [
    `apiKey: '${process.env.API_KEY}'`,
    `authDomain: '${process.env.AUTH_DOMAIN}'`,
    `databaseURL: '${process.env.DATABASE_URL}'`,
    `projectId: '${process.env.PROJECT_ID}'`,
    `storageBucket: '${process.env.STORAGE_BUCKET}'`,
    `messagingSenderId: '${process.env.MESSAGING_SENDER_ID}'`,
    `gaTrackingCode: '${process.env.GA_TRACKING_CODE}'`,
    `apiUrl: '${process.env.APPLICATION_API_URL}'`,
    `staticContentServerUrl: '${process.env.STATIC_CONTENT_SERVER_URL}'`,
    `googeMapsApiKey: '${process.env.GOOGLE_MAPS_API_KEY}'`
  ]
};

replace(options)
  .then(changes => {
    console.log('Modified files:', changes.join(', '));
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });

export {};
