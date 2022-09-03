import React from 'react';
import TextArea from './TextArea';

export default {
  title: 'Components/Forms/TextArea',
  component: TextArea,
  parameters: {
    componentSubtitle: 'Component',
  },
};

export const Regular = (args) => <TextArea {...args} />;

Regular.args = {
  name: 'inputname',
  helperText: '',
  labelText: 'Label Text',
  cols: 50,
};

export const withError = (args) => <TextArea {...args} />;


withError.args = {
  name: 'inputname',
  helperText: '',
  labelText: 'The labelText',
  invalid: { message: 'Please enter your first name' },
};
