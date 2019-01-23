import * as functions from 'firebase-functions';

import { server } from '../dist/apps/web-application-ssr/main';

export const http = functions.https.onRequest(server);
