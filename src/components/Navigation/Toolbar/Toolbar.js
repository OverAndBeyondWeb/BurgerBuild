import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.menuToggleClicked}/>
      <div className={classes.Logo}>
        <Logo/>
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems/>
      </nav>
      
    </header>
  )
};

export default toolbar;