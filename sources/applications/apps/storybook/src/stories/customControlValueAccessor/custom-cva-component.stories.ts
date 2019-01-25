import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';

import { CustomCvaComponent } from './custom-cva.component';

const description = `
  This is an example of component that implements ControlValueAccessor interface
`;

storiesOf('Custom|ngModel', module).add(
  'custom ControlValueAccessor',
  () => ({
    component: CustomCvaComponent,
    props: {
      ngModel: 'Type anything',
      ngModelChange: action('ngModelChnange')
    }
  }),
  { notes: description }
);
