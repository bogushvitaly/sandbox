import * as functions from 'firebase-functions';

import { purescript } from './Main.purs';

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from " + purescript + "!");
});
