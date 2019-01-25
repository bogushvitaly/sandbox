import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { DummyService } from './moduleMetadata/dummy.service';
import { ServiceComponent } from './moduleMetadata/service.component';

storiesOf('Custom|Providers', module)
  .addDecorator(
    moduleMetadata({
      imports: [],
      schemas: [],
      declarations: [],
      providers: [DummyService]
    })
  )
  .add('Simple', () => ({
    component: ServiceComponent,
    props: {
      name: 'Static name'
    }
  }))
  .addDecorator(withKnobs)
  .add('With knobs', () => {
    const name = text('name', 'Dynamic knob');

    return {
      component: ServiceComponent,
      props: {
        name
      }
    };
  });
