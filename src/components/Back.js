import { useLocation, useNavigate } from 'react-router-dom';

export const Back = () => {
  //navigation
  const navigate = useNavigate();
  //if pathname is root dont show back button
  const { pathname } = useLocation();
  return (
    pathname !== '/' && (
      <div
        className='m-4 hover:cursor-pointer text-pink-500 font-bold'
        onClick={() => navigate(-1)}
      >
        ⬅ Back
      </div>
    )
  );
};
