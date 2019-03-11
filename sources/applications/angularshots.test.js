import path from 'path';
import initStoryshots, {
  multiSnapshotWithOptions
} from '@storybook/addon-storyshots';

jest.mock('./reports/addon-jest.testresults.json', () => ({}), {
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
