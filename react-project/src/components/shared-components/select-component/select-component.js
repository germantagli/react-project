import React from 'react';
import { Select } from 'element-react/next';
import "./select-component.scss"
import 'element-theme-default';

const SelectComponent = (props, context) => {

  /** Component created to share it with the rest of the application renders a Select based on the properties that are passed
    *@prop {string}       placeholder  -> Placeholder of Select
    *@prop {Boolean}      disabled     -> Whether Select is disabled
    *@prop {function}     change       -> Function that is called when the value of the component changes
    *@prop {Boolean}      multiple     -> Whether multiple-select is activated
    *@prop {Boolean}      clearable    -> Whether single select can be cleared
    *@prop {Array}        options      -> List options
  **/
  const { placeholder,disabled, change,value,  multiple, clearable, label, options } = props;

  /** handleChange : manage component changes
    *@param {string/number}  event  -> new value
    *@return {void}
  **/

  const handleChange = (evet) => {
    change(evet)
  };

  return (
    <Select 
      multiple={multiple}
      disabled={disabled}
      clearable={clearable}
      placeholder={placeholder}
      label={label}
      value={value}
      onChange={handleChange} 
      >
      {
        options?.map(el => {
          return <Select.Option key={el.value} label={el.label} value={el.value} />
        })
      }
    </Select>
  );

};

export default SelectComponent;
