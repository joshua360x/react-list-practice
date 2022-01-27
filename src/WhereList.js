import React from 'react';
import WhereItem from './WhereItem';

function WhereList({ whereAbouts }) {
  return <div className='alternate2'>
    <h2>Here is the Where Are People From List Display</h2>
    <div className='listDisplay'>


      {
        whereAbouts.map((whereAbout, i) => <WhereItem key={`${whereAbout}-${i}`} {...whereAbout} />)
      }
    </div>
  </div>;
}

export default WhereList;

