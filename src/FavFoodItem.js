import React from 'react';

export default function FavFoodItem({ name, favFood }) {
  return <div>
    <p>Name: {name}</p>
    <p>Favorite Food: {favFood}</p>
  </div>;
}

