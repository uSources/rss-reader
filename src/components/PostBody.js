export const PostBody = ({ title, children }) => {
  return (
    <div className='p-4 my-2 w-full h-full shadow-lg rounded-t-xl dark:bg-slate-700 dark:text-white'>
      <div className='text-left text-2xl font-bold dark:text-pink-500'>
        {title}
      </div>
      {children}
    </div>
  );
};
