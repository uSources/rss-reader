import { useEffect, useState, useContext } from 'react';
import { Feed } from './Feed';
import { defaultURL } from '../config/config';
import { Link } from 'react-router-dom';
import { getStorageValue } from '../utils/utils';
import { Message } from './Message';
import { FeedHeader } from './FeedHeader';
import { Label } from './Label';
import FeedListContext from '../store/FeedStore';
import { useQuery } from 'react-query';
import { fetchRSS } from '../api/rss';

export const Dashboard = () => {
  //Get data from context
  const { addFeedItems, orderFeed, feedList } = useContext(FeedListContext);

  //get data, error, loading from React Query
  const { isLoading, isError, data } = useQuery('feed', () =>
    fetchRSS({
      url: getStorageValue('url', defaultURL),
      headers: null,
      method: 'get',
    })
  );

  //order key state
  const [orderKey, setOrderKey] = useState('pubDate');

  //order response by key, and set to data
  const orderData = (orderKey) => {
    setOrderKey(orderKey);
    orderFeed(orderKey);
  };

  //order data by orderKey when response change
  useEffect(() => {
    if (data) {
      addFeedItems(data);
    }
  }, [data]);

  //if searchText is empty, set response as data, overwise, filter all response items by title using searchtext
  const searchText = (searchText) => {
    if (searchText.trim() === '') {
      addFeedItems(data);
      orderData(orderKey);
    } else {
      //transform to lowercase for avoid case sensitivity
      const filteredText = [...data].filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );

      addFeedItems(filteredText);
    }
  };

  if (isLoading) {
    return <Message message='Loading...'></Message>;
  }

  if (isError) {
    return (
      <Message message='Error, Something went wrong!'>
        <Link to='/config' className='hover:underline'>
          <Label className='hover:underline'>
            Try to use different RSS URL
          </Label>
        </Link>
      </Message>
    );
  }

  return (
    <div className='m-4'>
      <FeedHeader orderData={orderData} searchText={searchText}></FeedHeader>
      <Feed feed={feedList} />
    </div>
  );
};
