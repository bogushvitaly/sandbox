import * as functions from 'firebase-functions';

import { requestListener } from '../dist/apps/web-application/server/main';

export const http = functions.https.onRequest(requestListener);

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});
