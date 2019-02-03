import { withTests } from '@storybook/addon-jest';
import { storiesOf } from '@storybook/angular';

import * as results from '../../../../addon-jest.testresults.json';
import { AppComponent } from './app.component';

storiesOf('Addon|Jest', module)
  .addDecorator(
    withTests({
      results,
      filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$'
    })
  )
  .add(
    'app.component with jest tests',
    () => ({
      component: AppComponent,
      props: {}
    }),
    {
      jest: 'app.component'
    }
  );
