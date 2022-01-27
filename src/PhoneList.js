import React from 'react';
import PhoneItem from './PhoneItem';

function PhoneList(props) {
  return <div>
    <h2>Here is the Phone List Display</h2>
    {
      props.phones.map((phone, i) => <PhoneItem key={`${phone}-${i}`} phone={phone} />)
    }
  </div>;
}

export default PhoneList;

