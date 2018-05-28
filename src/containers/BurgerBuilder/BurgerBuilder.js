import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  state = {
    lettuce: 1,
    bacon: 1,
    cheese: 2,
    meat: 2
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
