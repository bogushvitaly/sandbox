import { linkTo } from '@storybook/addon-links';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { Button, Welcome } from '@storybook/angular/demo';

storiesOf('Welcome', module).add('to Storybook', () => ({
  template: `<storybook-welcome-component (showApp)="showApp()"></storybook-welcome-component>`,
  props: {
    showApp: linkTo('Button')
  },
  moduleMetadata: {
    declarations: [Welcome]
  }
}));

storiesOf('Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [Button]
    })
  )
  .add('with text', () => ({
    template: `<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>`,
    props: {
      text: 'Hello Button',
      onClick: event => {
        console.log('some bindings work');
        console.log(event);
      }
    }
  }))
  .add('with some emoji', () => ({
    template: `<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>`,
    props: {
      text: '😀 😎 👍 💯',
      onClick: () => {}
    }
  }));
