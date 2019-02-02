const fs = require('fs');
const path = require('path');
const replaceInFile = require('replace-in-file');
const WEB_APPLIATION_ENVIRONMENT_FILE = path.join(process.cwd(), 'libs', 'core', 'environments', 'environment.ts');

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

if (!process.env.GITLAB_CI && !fs.existsSync(DOTENV_CONFIG_FILE)) {
  console.error('Local Environment .env file is required');
  process.exit(1);
}

require('dotenv-extended').load({
  encoding: 'utf8',
  silent: true,
  path: DOTENV_CONFIG_FILE,
  defaults: '.env.defaults',
  schema: '.env.schema',
  errorOnMissing: false,
  errorOnExtra: false,
  includeProcessEnv: false,
  assignToProcessEnv: true,
  overrideProcessEnv: false
});

replaceInFile({
  files: WEB_APPLIATION_ENVIRONMENT_FILE,
  from: [
    /apiKey: '(.*)?'/,
    /authDomain: '(.*)?'/,
    /databaseURL: '(.*)?'/,
    /projectId: '(.*)?'/,
    /storageBucket: '(.*)?'/,
    /messagingSenderId: '(.*)?'/,
    /apiUrl: '(.*)?'/,
    /staticContentServerUrl: '(.*)?'/
  ],
  to: [
    `apiKey: '${process.env.API_KEY}'`,
    `authDomain: '${process.env.AUTH_DOMAIN}'`,
    `databaseURL: '${process.env.DATABASE_URL}'`,
    `projectId: '${process.env.PROJECT_ID}'`,
    `storageBucket: '${process.env.STORAGE_BUCKET}'`,
    `messagingSenderId: '${process.env.MESSAGING_SENDER_ID}'`,
    `apiUrl: '${process.env.APPLICATION_API_URL}'`,
    `staticContentServerUrl: '${process.env.STATIC_CONTENT_SERVER_URL}'`
  ]
})
  .then(changes => {
    console.log('Modified files:', changes.join(', '));
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });

export {};
