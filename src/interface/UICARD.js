import React from 'react';
import classes from './ui,module.css'

const UICARD = ({children}) => {
  return <div className={classes.card}>
      {children }
  </div>;
};

export default UICARD;
