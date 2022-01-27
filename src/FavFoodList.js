import React from 'react';
import FavFoodItem from './FavFoodItem';

function FavFoodList({ foods }) {
  return <div>
    <h2>Here is the Fav Food List Display</h2>
    {
      foods.map((food, i) => <FavFoodItem key={`${food}-${i}`} {...food} />)
    }
  </div>;
}

export default FavFoodList;

