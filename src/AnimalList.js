import React from 'react';
import AnimalItem from './AnimalItem';

function AnimalList({ animals }) {
  return <div className='alternate1'>
    <h2>Here is the Animal List Display</h2>

    <div className='listDisplay'>

      {
        animals.map((animal, i) => <AnimalItem key={`${animal}${i}`} {...animal} />)
      }
    </div>
  </div>;
}

export default AnimalList;

