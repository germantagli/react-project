import React from 'react';
import { Button } from 'element-react/next';
import "./button-component.scss"
import 'element-theme-default';

const ButtonComponent = (props, context) => {
  /** Component created to share it with the rest of the application renders a button based on the properties that are passed
    *@prop {string}   size          ->large/small/mini
    *@prop {string}   type          ->primary/success/warning/danger/info/text
    *@prop {Boolean}  disabled      ->false/true
    *@prop {string}   icon          ->button icon, accepts an icon name of Element icon component
    *@prop {string}   label         ->label button
    *@prop {function} functionClick ->function that is called when the button is clicked
  **/

  const { size,type, disabled, icon, label, functionClick } = props;

  /** handleClick : manage click component 
    *@return {void}
  **/
  const handleClick = () => {
      functionClick()
  }

  return (
    <Button onClick={handleClick} icon={icon} disabled={disabled} size={size} type={type} >{label}</Button>
  );
  
};

export default ButtonComponent;

