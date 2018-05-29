import React from 'react';
import classes from './Toolbar.css';

const toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <div>Logo</div>
      <nav></nav>
    </header>
  )
};

export default toolbar;