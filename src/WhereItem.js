import React from 'react';
// import WhereFrom from './WhereFrom';

export default function WhereItem({ name, livesIn, whereFrom }) {
  return <div className='hover2'>
    <p>Name: {name}</p>
    <p>I live in:{livesIn}</p>
    <p>I&apos;m From: {whereFrom.city}, {whereFrom.state}</p>
    {
      // whereFrom.map((from, i) => <WhereFrom key={`${from}-${Math.random() + i}`} {...from} />)
    }
    {/* <WhereFrom /> */}
  </div>;
}


