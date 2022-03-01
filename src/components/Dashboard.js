import React, { useEffect, useMemo, useState } from 'react';
import { Order } from './Order';
import useRss from '../hooks/useRSS';
import { Searchbar } from './Searchbar';
import { Feed } from './Feed';
import { defaultURL } from '../config/config';
import { Link } from 'react-router-dom';
import { getStorage } from '../utils/getStorage';
import { orderByKey } from '../utils/utils';

export const Dashboard = () => {
  //get response, error, loading from url
  const { response, error, loading } = useRss({
    url: getStorage({ key: 'url', initialValue: defaultURL }),
    headers: null,
    method: 'get',
  });

  //order key state
  const [orderKey, setOrderKey] = useState('pubDate');

  //data state
  const [data, setData] = useState([]);

  //order response by key, and set to data
  const orderData = (orderKey) => {
    setOrderKey(orderKey);
    setData(
      orderByKey({
        key: orderKey,
        array: response ?? [],
      })
    );
  };

  //order data by orderKey when response change
  useEffect(() => {
    if (response) {
      orderData(orderKey);
    }
  }, [response]);

  //if searchText is empty, set response as data, overwise, filter all response items by title using searchtext
  const searchText = (searchText) => {
    if (searchText.trim() === '') {
      orderData(orderKey);
    } else {
      //transform to lowercase for avoid case sensitivity
      const filteredText = [...response].filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setData(filteredText);
    }
  };

  if (loading) {
    return <span className='text-pink-500 font-bold'>Loading...</span>;
  }

  if (error) {
    return (
      <span className='text-pink-500 font-bold'>
        Error, Something went wrong!
      </span>
    );
  }

  return (
    <div className='mx-4'>
      <div className='p-4 flex flew-row items-center'>
        <div className='w-60'>
          <Order selectOrder={orderData}></Order>
        </div>
        <div className='grow'>
          <Searchbar setSearchtext={searchText}></Searchbar>
        </div>
        <Link to='/config'>
          <div className='mx-4 text-pink-500 text-3xl'>⚙</div>
        </Link>
      </div>
      <Feed feed={data} />
    </div>
  );
};
