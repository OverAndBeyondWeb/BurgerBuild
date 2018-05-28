import React from 'react';
import Wrapper from '../../../hoc/Wrapper';

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients)
    .map(key => <li key={key}>{key}: {props.ingredients[key]}</li>);
  return (
    <Wrapper>
      <h3>Your Order</h3>
      <p>ingredients:</p>
      <ul>
        {ingredients}
      </ul>
    </Wrapper>
  )
};

export default orderSummary;
