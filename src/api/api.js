import axios from 'axios';

//Axios instance
//api.rss2json.com transforms xml rss to json rss and bypass CORS
export default axios.create({
  baseURL: 'https://api.rss2json.com/v1/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
