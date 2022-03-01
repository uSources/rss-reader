import { useState } from 'react';

export const Searchbar = ({ setSearchtext }) => {
  //text state
  const [text, setText] = useState('');

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
    setSearchtext(e.target.value); //emit text to parent component
  };

  return (
    <input
      className='w-full p-2 bg-gray-100 caret-pink-500 text-black rounded-lg dark:bg-gray-900 dark:text-white'
      type='text'
      value={text}
      onChange={(e) => onChange(e)}
      placeholder='Search by title...'
    ></input>
  );
};
