import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { CustomPipePipe } from './moduleMetadata/custom.pipe';
import { NameComponent } from './moduleMetadata/name.component';

storiesOf('Custom|Pipes', module)
  .addDecorator(
    moduleMetadata({
      imports: [],
      schemas: [],
      declarations: [CustomPipePipe],
      providers: []
    })
  )
  .add('Simple', () => ({
    component: NameComponent,
    props: {
      field: 'foobar'
    }
  }))
  .addDecorator(withKnobs)
  .add('With Knobs', () => ({
    component: NameComponent,
    props: {
      field: text('field', 'foobar')
    }
  }));
