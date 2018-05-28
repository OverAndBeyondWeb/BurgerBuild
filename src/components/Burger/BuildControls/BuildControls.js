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

const buildControls = () => {
  return (
    <div className={classes.BuildControls}>
      {controls.map(control => <BuildControl key={control.type} label={control.label}/>)}
    </div>
  )
};

export default buildControls;
