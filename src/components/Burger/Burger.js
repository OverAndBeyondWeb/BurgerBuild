import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

 const burger = (props) => {
  const ingredientsToArray = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((arraySlot, index) => {
        return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />;
      });
    });
    console.log(ingredientsToArray);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {ingredientsToArray}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
};

export default burger;