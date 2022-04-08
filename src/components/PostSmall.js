import { Link } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';
import { PostBody } from './PostBody';
import { PostFooter } from './PostFooter';
import { PostImage } from './PostImage';

export const PostSmall = ({ item }) => {
  //prevent XSS
  const cleatHTML = sanitizeHtml(item.description, {
    allowedTags: ['b', 'i', 'em', 'strong'],
  });

  return (
    <Link to='/detail' state={item}>
      <div
        className={`my-6 flex flex-row', ${item.isRead ? 'opacity-50' : ''}`}
      >
        <div className='w-50 h-full'>
          <PostImage thumbnail={item.thumbnail}></PostImage>
        </div>
        <div className='w-full mx-2 flex flex-col'>
          <PostBody title={item.title}>
            <div className='line-clamp-2'>
              <div dangerouslySetInnerHTML={{ __html: cleatHTML }}></div>
            </div>
          </PostBody>
          <PostFooter author={item.author} date={item.pubDate}></PostFooter>
        </div>
      </div>
    </Link>
  );
};
