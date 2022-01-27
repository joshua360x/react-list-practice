import React from 'react';
import WhereItem from './WhereItem';

function WhereList({ whereAbouts }) {
  return <div>
    <h2>Here is the Where Are People From List Display</h2>

    {
      whereAbouts.map((whereAbout, i) => <WhereItem key={`${whereAbout}-${i}`} {...whereAbout} />)
    }
  </div>;
}

export default WhereList;

