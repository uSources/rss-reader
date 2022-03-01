import { Navigate, Outlet } from 'react-router-dom';

//Checks if has localstorage, if not has navigate to route
export const ProtectedStorageRoute = ({ index, route = '/' }) => {
  const value = localStorage.getItem(index);

  if (!value) {
    return <Navigate to={route} />;
  }

  return <Outlet />;
};
