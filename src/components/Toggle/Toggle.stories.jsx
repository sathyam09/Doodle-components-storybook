import React from "react";

import ToggleButton from "./Toggle";

export default {
  title: "Components/Forms/ToggleButton",
  component: ToggleButton
};

const Template = (args) => <ToggleButton {...args} />;

export const FullToggle = Template.bind({});
FullToggle.args = {
  toggle_type: "FullToggle",
  checked: true,
  isDisabled: false
};




