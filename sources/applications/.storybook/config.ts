import { addParameters, configure } from '@storybook/angular';

addParameters({
  options: {
    hierarchyRootSeparator: /\|/
  }
});

function loadStories() {
  // put welcome screen at the top of the list so it's the first one displayed
  require('../apps/web-application/src/stories');

  // automatically import all story ts files that end with *.stories.ts
  const req = require.context('../apps/web-application/src/stories', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
