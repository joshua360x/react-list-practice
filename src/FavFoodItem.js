import React from 'react';

export default function FavFoodItem({ name, favFood }) {
  return <div>
    <p>{name}</p>
    <p>{favFood}</p>
  </div>;
}

