import React from 'react';
import Wrapper from '../../../hoc/Wrapper';

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients)
    .map(key => <li key={key}>{key}: {props.ingredients[key]}</li>);
  return (
    <Wrapper>
      <h3>Your Order</h3>
      <p>You have ordered a burger with the following ingredients:</p>
      <ul>
        {ingredients}
      </ul>
      <div>Total Price: ${props.price.toFixed(2)}</div>
    </Wrapper>
  )
};

export default orderSummary;
