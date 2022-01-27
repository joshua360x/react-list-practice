import React from 'react';
import AnimalBrosItem from './AnimalBrosItem';

export default function AnimalItem({ animal, owner, animalBros }) {
  return <div className='hover1'>
    <p>Animal: {animal}</p>
    <p>Owner: {owner}</p>
    {
      animalBros.map((bros, i) => <AnimalBrosItem key={Math.random() + i} animalBrothers={bros} />)
    }
  </div>;
}

