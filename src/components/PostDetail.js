import { useLocation } from 'react-router-dom';
import { PostFooter } from './PostFooter';
import sanitizeHtml from 'sanitize-html';
import { PostImage } from './PostImage';
import { PostBody } from './PostBody';

export const PostDetail = () => {
  //location state
  const { state } = useLocation();

  //prevent XSS
  const cleatHTML = sanitizeHtml(state.content, {
    allowedTags: ['b', 'i', 'em', 'strong', 'a'],
  });

  return (
    <div className='m-4 flex flex-row'>
      <div className='w-50 h-full'>
        <PostImage thumbnail={state.thumbnail}></PostImage>
      </div>
      <div className='mx-2 w-full flex flex-col'>
        <PostBody title={state.title}>
          <div dangerouslySetInnerHTML={{ __html: cleatHTML }}></div>
        </PostBody>
        <PostFooter author={state.author} date={state.pubDate}></PostFooter>
      </div>
    </div>
  );
};
