import { useState } from 'react';
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
    <div className='text-pink-500'>
      <span className='mr-4 font-bold'>Order by:</span>
      <Select
        name='order'
        value={order}
        onChange={onChange}
        options={options}
      ></Select>
    </div>
  );
};
