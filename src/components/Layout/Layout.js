import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends Component {

  state = {
    showMobileMenu: false
  }

  menuToggle = () => {
    this.setState((prevState) => {
      return {showMobileMenu: !prevState.showMobileMenu}
    });
  }

  render() {
    return (
    <Wrapper>
      <Toolbar menuToggleClicked={this.menuToggle}/>
      <SideDrawer 
        open={this.state.showMobileMenu}
        closed={this.menuToggle}/>
      <main className={classes.content}>
        {this.props.children}
      </main>
    </Wrapper>
  )
  }
};

export default Layout;
