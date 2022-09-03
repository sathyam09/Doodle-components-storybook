import React from 'react';
import moment from 'moment'

//Import Calendar component from CalendarDropdown.jsx
import { CalendarDropdownComp } from './CalendarDropdown';

export default {
  title: 'Components/DatePicker',
  component: CalendarDropdownComp,
  argTypes: {
    format:"MMM",
    picker:"month",
    placeholder:"Month",
    value:moment(new Date()),
    id:"datePickerComp"

  },
};

const Template = (args) => <CalendarDropdownComp {...args} />;

//Calendar for Month slector
export const Month = Template.bind({});
Month.args = {
  format:"MMM",
  onChange:"undefined",
  picker:"month",
  placeholder:"Month",
  value:moment(new Date()),
  id:"datePickerComp"
 
};

//Calendar for Month slector
export const Day = Template.bind({});
Day.args = {
  format:"Do",
  picker:"",
  placeholder:"Day",
  value:moment(new Date()),
    id:"datePickerComp"
 
};

//Calendar for Day slector
export const Year = Template.bind({});
Year.args = {
  format:"YYYY",
  picker:"year",
  placeholder:"Year",
  value:moment(new Date()),
  id:"datePickerComp"
};

//Calendar for default slector
export const Default = Template.bind({});
Default.args = {
  format:"Do MMMM YYYY",
  // value:moment(new Date()),
  id:"datePickerComp"
};


