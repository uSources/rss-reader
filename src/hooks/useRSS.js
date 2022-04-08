import { useEffect, useState } from 'react';
import api from '../api/api';

//Custom hook get/post/delete rss
export const useRSS = ({ url, method, headers }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  useEffect(() => {
    //Get rss as json and tranform
    const fetch = () => {
      const read_guids = JSON.parse(localStorage.getItem('read_guid')) ?? [];

      api[method](`/api.json?rss_url=${url}`, JSON.parse(headers))
        .then((res) => {
          const rssItems = res.data.items.map((item, index) => ({
            index: index, //index of element, guid is string, using number is more performant
            categories: item?.categories,
            guid: item?.guid,
            link: item?.link,
            title: item?.title,
            pubDate: item?.pubDate ? new Date(item.pubDate) : new Date(), //if date is not set, return new Date() value
            author: item?.author,
            thumbnail: item?.enclosure?.link,
            content: item?.content,
            description: item?.description,
            isRead: read_guids.some((guid) => guid === item.guid),
          }));
          setResponse(rssItems);
        })
        .catch((err) => setError(err)) //if has error, set error
        .finally(() => setloading(false)); //when finish set isloading to false
    };
    fetch();
  }, [url, method, headers]);

  return { response, error, loading };
};
