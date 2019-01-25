import path from 'path';
import initStoryshots, {
  multiSnapshotWithOptions
} from '@storybook/addon-storyshots';

jest.mock('./addon-jest.testresults.json', () => ({}), {
  virtual: true
});
jest.mock('apps/storybook/src/environment', () => ({}), {
  virtual: true
});

initStoryshots({
  framework: 'angular',
  integrityOptions: {
    cwd: path.join(__dirname, 'apps', 'storybook', 'src', 'stories')
  },
  configPath: path.join(__dirname, '.storybook'),
  test: multiSnapshotWithOptions()
});
