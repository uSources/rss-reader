export const PostImage = ({ thumbnail }) => {
  if (!thumbnail) {
    return (
      <img
        alt='thumbnail'
        src='./not-found.jpg'
        className='rounded-3xl w-72'
      ></img>
    );
  }

  return (
    <img alt='thumbnail' src={thumbnail} className='rounded-3xl w-72'></img>
  );
};
