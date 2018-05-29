import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import classes from './Layout.css';

const layout = (props) => {
  return (
    <Wrapper>
      <Toolbar/>
      <SideDrawer/>
      <main className={classes.content}>
        {props.children}
      </main>
    </Wrapper>
  )
};

export default layout;
