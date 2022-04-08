import api from './api';

//Create a method for fetching rss data
export const fetchRSS = ({ url, method, headers }) => {
  const read_guids = JSON.parse(localStorage.getItem('read_guid')) ?? [];

  return api[method](`/api.json?rss_url=${url}`, JSON.parse(headers)).then(
    (res) => {
      return res.data.items.map((item, index) => ({
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
        isRead: read_guids.includes(item.guid),
      }));
    }
  );
};
