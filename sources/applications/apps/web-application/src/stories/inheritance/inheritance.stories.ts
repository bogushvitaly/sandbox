import { storiesOf } from '@storybook/angular';

import { BaseButtonComponent } from './base-button.component';
import { IconButtonComponent } from './icon-button.component';

storiesOf('Custom|Inheritance', module)
  .add('icon button', () => ({
    component: IconButtonComponent,
    props: {
      icon: 'this is icon',
      label: 'this is label'
    }
  }))
  .add('base button', () => ({
    component: BaseButtonComponent,
    props: {
      label: 'this is label'
    }
  }));
