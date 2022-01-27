import React from 'react';
import AnimalItem from './AnimalItem';

function AnimalList({ animals }) {
  return <div>
    <h2>Here is the Animal List Display</h2>

    {
      animals.map((animal, i) => <AnimalItem key={`${animal}${i}`} {...animal} />)
    }
  </div>;
}

export default AnimalList;

