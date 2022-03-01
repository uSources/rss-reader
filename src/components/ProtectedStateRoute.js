import { Navigate, Outlet, useLocation } from 'react-router-dom';

//Checks if has state, if not has navigate to route
export const ProtectedStateRoute = ({ route = '/' }) => {
  //location state
  const { state } = useLocation();

  if (!state) {
    return <Navigate to={route} />;
  }

  return <Outlet />;
};
