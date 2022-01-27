import React from 'react';
import PhoneItem from './PhoneItem';

function PhoneList(props) {
  return <div className='alternate1'>
    <h2>Here is the Phone List Display</h2>
    <div className='listDisplay'>

      {
        props.phones.map((phone, i) => <PhoneItem key={`${phone}-${i}`} phone={phone} />)
      }
    </div>
  </div>;
}

export default PhoneList;

