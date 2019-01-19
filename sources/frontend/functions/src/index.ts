import * as functions from 'firebase-functions';

import { requestListener } from '../dist/apps/web-application-ssr/main';

export const http = functions.https.onRequest(requestListener);
