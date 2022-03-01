import { PostSmall } from './PostSmall';

export const Feed = ({ feed }) => {
  //If feed is empty, show error message
  if (feed.length <= 0) {
    return (
      <div className='flex justify-center items-center h-screen text-xl font-bold dark:text-pink-500'>
        Nothing to see here
      </div>
    );
  }

  //Render post
  return feed.map((item) => {
    return <PostSmall key={item.index} item={item}></PostSmall>;
  });
};
