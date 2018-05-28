import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  state = {
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 3
  }

  render() {
    return (
      <Wrapper>
        <Burger ingredients={this.state}/>
      </Wrapper>
    )
  }
};

export default BurgerBuilder;
