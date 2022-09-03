import React, { useState } from 'react';
import Checkbox from './Checkbox';
import InputGroup from '../InputGroup/InputGroup';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: 'Component',
    // status: 'released',
  },
};

export const Regular = (args) => <Checkbox {...args} />;

Regular.args = {
  labelText: 'Label text',
  id: 'check-1',
};

export const CheckedInput = (args) => {
  const [isChecked, setChecked] = useState(true);

  return (
    <Checkbox
      {...args}
      onChange={() => setChecked(!isChecked)}
      checked={isChecked}
    />
  );
};

CheckedInput.args = {
  labelText: 'Checked Input',
  id: 'check-2',
};





export const DisabledInput = (args) => <Checkbox {...args} />;

DisabledInput.args = {
  labelText: 'Disabled Input',
  disabled: true,
  id: 'check-4',
};




export const VerticalGrouping = (args) => (
  <InputGroup
    helperText="select any that apply"
    labelText="Programming language preference"
    vertical
  >
    <Checkbox {...args} defaultChecked labelText="ReactJs" id="react" />
    <Checkbox {...args} defaultChecked labelText="ReactNative" id="native" />
    <Checkbox {...args} labelText="Node.js" id="node" />
    <Checkbox {...args} labelText="PHP" id="php" />
    <Checkbox {...args} labelText="Java" id="java" />
  </InputGroup>
);


export const HorizontalGrouping = (args) => (
  <InputGroup
    helperText="select any that apply"
    labelText="Programming language preference"
  >
    <Checkbox {...args} defaultChecked labelText="ReactJs" id="react1" />
    <Checkbox {...args} defaultChecked labelText="ReactNative" id="native1" />
    <Checkbox {...args} labelText="Node.js" id="node1" />
    <Checkbox {...args} defaultChecked labelText="PHP" id="php1" />
    <Checkbox {...args} labelText="Java" id="java1" />
  </InputGroup>
);
