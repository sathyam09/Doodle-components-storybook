import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  parameters: {
    componentSubtitle: 'Component',
    status: 'experimental',
  },
};

export const Regular = (args) => (
  <Input {...args}>
    {() => <input placeholder="This can be any type of custom input" />}
  </Input>
);

Regular.args = {
  name: 'inputname',
//   helperText: 'Optional helperText',
  labelText: 'The labelText',
};


