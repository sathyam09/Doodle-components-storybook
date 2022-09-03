import React from 'react';
import Select from './Select';
import SelectItem from './SelectItem';

export default {
  title: 'Components/Forms/Dropdown/select',
  component: Select,
  parameters: {
    componentSubtitle: 'Component',
  },
};

export const SelectDefault = (args) => {
  return (
    <Select {...args}>
      <SelectItem value="option-1" text="Option 1" />
      <SelectItem value="option-2" text="Option 2" />
    </Select>
  );
};

SelectDefault.args = {
  labelText: 'Label text',
  helperText: 'This is a helper text',
};


