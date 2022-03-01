import React, { useState } from 'react';

export const Order = ({ selectOrder }) => {
  //order state
  const [order, setOrder] = useState('date');

  const onChange = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
    selectOrder(e.target.value); //emit to parent order value
  };

  return (
    <div className='text-pink-500'>
      <span className='mr-4 font-bold'>Order by:</span>
      <select
        className='p-2 rounded-lg caret-pink-500 text-black dark:bg-gray-900 dark:text-white'
        name='order'
        value={order}
        data-testid='order'
        onChange={onChange}
      >
        <option value='pubDate'>Date</option>
        <option value='author'>Author</option>
        <option value='title'>Title</option>
      </select>
    </div>
  );
};
