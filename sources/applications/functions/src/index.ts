import * as functions from 'firebase-functions';

import { server } from '../dist/apps/web-application-api/main';
import { requestListener } from '../dist/apps/web-application/server/main';

export const web = functions.https.onRequest(requestListener);
export const api = functions.https.onRequest(server);
