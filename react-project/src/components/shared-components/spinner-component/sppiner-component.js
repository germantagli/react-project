import React from 'react';
import { Loading } from 'element-react/next';
import "./sppiner-component.scss"
import 'element-theme-default';

const SpinnerComponent = (props, context) => {
  
  /** Component created to share it with the rest of the application renders a loading based on the properties that are passed
    *@prop {boolean}   text       -> Loading text that displays under the spinner default  "Loading..."
    *@prop {boolean}   fullscreen -> Same as the fullscreen modifier of v-loading default  true
    *@prop {boolean}   loading    -> Control the loading state default  false
  **/

  const { text = "Loading..." , fullscreen = false, loading = false} = props;
  
  return (
    <Loading text={text} fullscreen={fullscreen} loading={loading}></Loading>
  );
};

export default SpinnerComponent;

