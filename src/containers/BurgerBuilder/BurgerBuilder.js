import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.7,
  bacon: 0.8,
  meat: 1
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 3
    },
    totalPrice: 4
  }

  addIngredient = (type) => {
    console.log(type);
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const ingredients = {...this.state.ingredients};
    ingredients[type] = updatedCount;
    this.setState({ingredients});
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({totalPrice: newPrice});
  }

  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const ingredients = {...this.state.ingredients};
    ingredients[type] = updatedCount;
    this.setState({ingredients});
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({totalPrice: newPrice});
  }

  render() {
    const disabled = {
     ...this.state.ingredients
    }
    for(let key in disabled) {
      disabled[key] = disabled[key] <= 0;
    }

    return (
      <Wrapper>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          disabled={disabled}
        />
      </Wrapper>
    )
  }
};

export default BurgerBuilder;
