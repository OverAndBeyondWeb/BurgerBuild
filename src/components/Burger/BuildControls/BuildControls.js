import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css';

const controls = [
  {
    label: 'Lettuce',
    type: 'lettuce'
  },
  {
    label: 'Bacon',
    type: 'bacon'
  },
  {
    label: 'Cheese',
    type: 'cheese'
  },
  {
    label: 'Meat',
    type: 'meat'
  }
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>price: ${props.price.toFixed(2)}</p>
      {controls.map(control => <BuildControl
                                  key={control.type}
                                  label={control.label}
                                  addIngredient={() => props.addIngredient(control.type)}
                                  removeIngredient={() => props.removeIngredient(control.type)}
                                  disabled={props.disabled[control.type]}
                                />)}
    </div>
  )
};

export default buildControls;
