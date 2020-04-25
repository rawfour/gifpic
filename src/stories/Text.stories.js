import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../components/Text';

storiesOf('Text', module)
  .add('Text', () => <Text>Lorem ipsum</Text>)
  .add('Text color', () => <Text color="primary">Lorem ipsum</Text>);
