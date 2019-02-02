import * as functions from 'firebase-functions';

import { server as staticContentServer } from '../dist/apps/static-content-server/main';
import { server as apiServer } from '../dist/apps/web-application-api/main';
import { requestListener } from '../dist/apps/web-application/server/main';

export const web = functions.https.onRequest(requestListener);
export const api = functions.https.onRequest(apiServer);
export const staticContent = functions.https.onRequest(staticContentServer);
