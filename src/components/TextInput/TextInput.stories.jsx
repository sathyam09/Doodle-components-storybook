import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Components/Forms/TextInput',
  component: TextInput,
  parameters: {
    componentSubtitle: 'Component',
  },
};

export const Regular = (args) => <TextInput {...args} />;

Regular.args = {
  type: 'text',
  name: 'inputname',
  helperText: '',
  labelText: 'The labelText',
  placeholder: 'placeholder',
};

export const PasswordInput = (args) => <TextInput {...args} />;

PasswordInput.args = {
  type: 'password',
  name: 'password',
  labelText: 'Password Label',
};

export const withError = (args) => <TextInput {...args} />;

withError.args = {
  name: 'inputname',
  helperText: '',
  labelText: 'Enter password',
  invalid: { message: 'Please enter your first name' },
};

export const withDisabled = (args) => <TextInput {...args} />;

withDisabled.args = {
  name: 'inputname',
  helperText: '',
  labelText: 'Disabled labelText',
  disabled: true,
};
export const autoComplete = (args) => <TextInput {...args} />;

autoComplete.args = {
  type: 'text',
  name: 'inputname',
  helperText: '',
  labelText: 'The Autocomplete Text',
  placeholder: 'placeholder',
  autoComplete:true
};
