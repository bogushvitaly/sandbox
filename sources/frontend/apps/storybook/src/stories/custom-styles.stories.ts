import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';

storiesOf('Custom|Style', module)
  .addDecorator(
    moduleMetadata({
      declarations: [Button]
    })
  )
  .add('Default', () => ({
    template: `<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>`,
    props: {
      text: 'Button with custom styles',
      onClick: action('log')
    },
    styles: [
      `
      storybook-button-component {
        background-color: yellow;
        padding: 25px;
      }
    `
    ]
  }))
  .addDecorator(withKnobs)
  .add('With Knobs', () => ({
    template: `<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>`,
    props: {
      text: text('text', 'Button with custom styles'),
      onClick: action('log')
    },
    styles: [
      `
      storybook-button-component {
        background-color: red;
        padding: 25px;
      }
    `
    ]
  }));
