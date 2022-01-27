import React from 'react';
// import WhereFrom from './WhereFrom';

export default function WhereItem({ name, livesIn, whereFrom }) {
  return <div>
    <p>{name}</p>
    <p>{livesIn}</p>
    <p>{whereFrom.city}</p>
    <p>{whereFrom.state}</p>
    {
      // whereFrom.map((from, i) => <WhereFrom key={`${from}-${Math.random() + i}`} {...from} />)
    }
    {/* <WhereFrom /> */}
  </div>;
}


