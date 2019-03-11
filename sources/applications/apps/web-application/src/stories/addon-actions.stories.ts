import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';

storiesOf('Addon|Actions', module)
  .add('Action only', () => ({
    component: Button,
    props: {
      text: 'Action only',
      onClick: action('log 1')
    }
  }))
  .add('Action and method', () => ({
    component: Button,
    props: {
      text: 'Action and Method',
      onClick: e => {
        console.log(e);
        e.preventDefault();
        action('log2')(e.target);
      }
    }
  }));
