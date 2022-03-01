export const PostFooter = ({ author, date }) => {
  return (
    <div className='flex flex-row rounded-md shadow-lg dark:bg-slate-800 dark:text-white bg-pink-200 p-2 text-black'>
      <div className='w-fit'>
        <span>by: </span>
        <span className='font-bold'>{author}</span>
      </div>
      <div className='grow content-end line-clamp-1 text-right'>
        <span>at: </span>
        <span className='font-bold'>{date?.toDateString()}</span>
      </div>
    </div>
  );
};
