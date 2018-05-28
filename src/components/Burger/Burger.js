import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

 const burger = (props) => {
  let ingredientsToComponents = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((arraySlot, index) => {
        return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if(ingredientsToComponents.length === 0) {
    ingredientsToComponents= <p>Please add some ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {ingredientsToComponents}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
};

export default burger;