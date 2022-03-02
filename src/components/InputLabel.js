import React from 'react';

export const InputLabel = ({
  value,
  placeholder,
  type = 'text',
  onChange,
  label,
}) => {
  return (
    <React.Fragment>
      {label && (
        <label className='dark:text-pink-500 font-bold'>RSS URL: </label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className='w-full bg-gray-100 rounded-lg caret-pink-500 text-black dark:bg-gray-900 p-2 dark:text-white'
        onChange={onChange}
      ></input>
    </React.Fragment>
  );
};
