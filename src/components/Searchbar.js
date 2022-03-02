import { useState } from 'react';
import { InputLabel } from './InputLabel';

export const Searchbar = ({ setSearchtext }) => {
  //text state
  const [text, setText] = useState('');

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
    setSearchtext(e.target.value); //emit text to parent component
  };

  return (
    <InputLabel
      value={text}
      placeholder='Search by title...'
      onChange={onChange}
    ></InputLabel>
  );
};
