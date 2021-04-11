import React from 'react';
import "./button-component.scss"
import { Button } from 'element-react/next';
import 'element-theme-default';

/** Component created to share it with the rest of the application renders a button based on the properties that are passed
  *@prop {string}   size      ->large/small/mini
  *@prop {string}   type      ->primary/success/warning/danger/info/text
  *@prop {Boolean}  disabled  ->false/true
  *@prop {string}   icon      ->button icon, accepts an icon name of Element icon component
  *@prop {string}   label     ->label button
**/

const ButtonComponent = (props, context) => {
  const { size,type, disabled, icon, label } = props;
  return (
    <Button icon={icon} disabled={disabled} size={size} type={type} >{label}</Button>
  );
};

export default ButtonComponent;

