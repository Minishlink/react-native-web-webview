import React from 'react';
import * as html from './html';
import * as uri from './uri';
import * as method from './method';

import { storiesOf } from '@storybook/react';

storiesOf('HTML source', module).add('basic', html.basic).add('inject javascript', html.inject);

storiesOf('URI source', module)
  .add('basic', uri.basic)
  .add('onMessage', uri.onMessage)
  .add('inject javascript', uri.inject);

storiesOf('With method', module).add('basic', method.basic).add('inject javascript', method.inject);
