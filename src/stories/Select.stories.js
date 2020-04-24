import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '../components/Select';

const exampleData = {
  label: 'Colors',
  options: ['red', 'green', 'blue'],
};

const exampleData2 = {
  label: 'Color',
  tooltipText: 'Set color',
  options: ['red', 'green', 'blue'],
};

const exampleData3 = {
  options: ['red', 'green', 'blue'],
};

storiesOf('Select', module)
  .add('with label + tooltip', () => <Select data={exampleData2} />)
  .add('with label', () => <Select data={exampleData} />)
  .add('without label', () => <Select data={exampleData3} />);
