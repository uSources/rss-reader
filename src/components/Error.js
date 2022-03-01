import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center text-pink-500 font-bold'>
      <span>Error, Something went wrong!</span>
      <Link to='/config' className='hover:underline'>
        Try to use different RSS URL
      </Link>
    </div>
  );
};
