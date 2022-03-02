import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultURL } from '../config/config';
import { useStorage } from '../hooks/useStorage';
import { Button } from './Button';
import { Card } from './Card';
import { FieldError } from './FieldError';
import { InputLabel } from './InputLabel';

export const Config = () => {
  //get url of localstorage or return default url setted in config.js
  const [url, setUrl] = useStorage('url', defaultURL);
  //error state
  const [error, setError] = useState(null);
  //navigate hook
  const navigate = useNavigate();

  //on input change
  const handleChange = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
    //Testing if is valid url
    if (/(http(s?)):\/\//i.test(e.target.value)) {
      setError(null);
    } else {
      setError('Must be a valid RSS URL');
    }
  };

  //if is has not error, redirecto to dashboard
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      navigate('/');
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit} className='flex flex-col w-full'>
        <InputLabel
          value={url}
          onChange={handleChange}
          label='URL RSS:'
          placeholder='http://...'
        ></InputLabel>
        <FieldError message={error}></FieldError>
        <Button type='submit' value='Save'></Button>
      </form>
    </Card>
  );
};
