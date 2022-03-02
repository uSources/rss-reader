import React, { useState } from 'react';
import { Label } from './Label';
import { Select } from './Select';

export const Order = ({ selectOrder }) => {
  //order state
  const [order, setOrder] = useState('date');

  //Order options
  const options = [
    {
      key: 'Date',
      value: 'pubDate',
    },
    {
      key: 'Author',
      value: 'author',
    },
    {
      key: 'Title',
      value: 'title',
    },
  ];

  const onChange = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
    selectOrder(e.target.value); //emit to parent order value
  };

  return (
    <React.Fragment>
      <Label className='mr-4'>Order by:</Label>
      <Select
        name='order'
        value={order}
        onChange={onChange}
        options={options}
      ></Select>
    </React.Fragment>
  );
};
