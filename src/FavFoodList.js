import React from 'react';
import FavFoodItem from './FavFoodItem';

function FavFoodList({ foods }) {
  return <div className='alternate2'>
    <h2>Here is the Fav Food List Display</h2>
    <div className='listDisplay'>

      {
        foods.map((food, i) => <FavFoodItem key={`${food}-${i}`} {...food} />)
      }
    </div>
  </div>;
}

export default FavFoodList;

