import { PostSmall } from './PostSmall';
import { Message } from './Message';

export const Feed = ({ feed }) => {
  //If feed is empty, show error message
  if (feed.length <= 0) {
    return <Message message='Nothing to see here'></Message>;
  }

  //Render post
  return feed.map((item) => {
    return <PostSmall key={item.index} item={item}></PostSmall>;
  });
};
