import { useEffect, useState } from 'react';
import { useRSS } from '../hooks/useRSS';
import { Feed } from './Feed';
import { defaultURL } from '../config/config';
import { Link } from 'react-router-dom';
import { getStorageValue, orderByKey } from '../utils/utils';
import { Message } from './Message';
import { FeedHeader } from './FeedHeader';
export const Dashboard = () => {
  //get response, error, loading from url
  const { response, error, loading } = useRSS({
    url: getStorageValue('url', defaultURL),
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
    return <Message message='Loading...'></Message>;
  }

  if (error) {
    return (
      <Message message='Error, Something went wrong!'>
        <Link to='/config' className='hover:underline'>
          Try to use different RSS URL
        </Link>
      </Message>
    );
  }

  return (
    <div className='m-4'>
      <FeedHeader orderData={orderData} searchText={searchText}></FeedHeader>
      <Feed feed={data} />
    </div>
  );
};
