import * as functions from 'firebase-functions';

import { requestListener } from '../dist/apps/web-application/server/main';

export const http = functions.https.onRequest(requestListener);
