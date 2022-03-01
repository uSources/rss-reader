import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultURL } from '../config/config';
import { getStorage } from '../utils/getStorage';

export const Config = () => {
  //get url of localstorage or return default url setted in config.js
  const [url, setUrl] = useState(
    getStorage({ key: 'url', initialValue: defaultURL })
  );
  //navigate hook
  const navigate = useNavigate();

  //if is not empty set to localstorage and redirecto to dashboard
  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim() !== '') {
      localStorage.setItem('url', url);
      navigate('/');
    }
  };
  return (
    <div className='m-4 p-4 bg-white dark:bg-gray-700 flex flex-col rounded-lg shadow-lg'>
      <form onSubmit={handleSubmit} className='flex flex-col w-full'>
        <label className='dark:text-pink-500 font-bold'>RSS URL: </label>
        <input
          type='text'
          value={url}
          placeholder='Enter rss url...'
          className='w-full bg-gray-100 rounded-lg caret-pink-500 text-black dark:bg-gray-900 p-2 dark:text-white'
          onChange={(e) => setUrl(e.target.value)}
        ></input>
        <button
          className='my-4 block w-52 bg-pink-200 dark:bg-pink-500 p-2 rounded-xl hover:shadow-lg'
          type='submit'
        >
          Save
        </button>
      </form>
    </div>
  );
};
