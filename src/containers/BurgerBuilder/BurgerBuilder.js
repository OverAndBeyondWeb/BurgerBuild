import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
      meat: 0
    },
    totalPrice: 4,
    burgerReady: false,
    orderSummary: false
  }

  setOrderSummaryTrue = () => {
    this.setState({orderSummary: true});
  }

  setOrderSummaryFalse = () => {
    this.setState({orderSummary: false});
  }

  setBurgerReady(ingredients) {
    for(let key in ingredients) {      
      if(ingredients[key] > 0) {
        this.setState({burgerReady: true});
        break;
      } else {
        this.setState({burgerReady: false});
      }  
    } 
  }

  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const ingredients = {...this.state.ingredients};
    ingredients[type] = updatedCount;
    this.setState({ingredients});
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({totalPrice: newPrice});
    this.setBurgerReady(ingredients);
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
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({totalPrice: newPrice});
    this.setBurgerReady(ingredients);
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
        <Modal show={this.state.orderSummary}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Backdrop show={this.state.orderSummary} hideOrder={this.setOrderSummaryFalse}/>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          disabled={disabled}
          price={this.state.totalPrice}
          burgerReady={this.state.burgerReady}
          revealOrder={this.setOrderSummaryTrue}
        />
      </Wrapper>
    )
  }
};

export default BurgerBuilder;
