import React from 'react';
import "./input-text-component.scss"
import { Input } from 'element-react/next';
import 'element-theme-default';

const InputTextComponent = (props, context) => {
  
  /** Component created to share it with the rest of the application renders a Input based on the properties that are passed
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
    <Input 
      value={value} 
      placeholder={placeholder} 
      disabled={disabled} 
      onChange={handleChange} 
    />
  );

};

export default InputTextComponent;

InputTextComponent.propTypes = {};
