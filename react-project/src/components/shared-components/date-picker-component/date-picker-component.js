import React from 'react';
import { DatePicker } from 'element-react/next';
import "./date-picker-component.scss"
import 'element-theme-default';

const DatePickerComponent = (props, context) => {
  
  /** Component created to share it with the rest of the application renders a DatePicker based on the properties that are passed
    *@prop {string}         placeholder  -> Placeholder of Input
    *@prop {Boolean}        disabled     -> Whether Input is disabled
    *@prop {function}       change       -> Function that is called when the value of the component changes
    *@prop {string/number}  value        -> Binding value
  **/
  
  const { placeholder, disabled, change, value } = props;

  /** handleChange : manage component changes
    *@param {string/number}  event  -> new value
    *@return {void}
  **/

  const handleChange = (evet) => {
    change(evet)
  };

  return (
    <DatePicker
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleChange}
    />
  );

};

export default DatePickerComponent;

DatePickerComponent.propTypes = {};
