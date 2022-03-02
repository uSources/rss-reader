import { render } from '@testing-library/react';
import { Route, Router, Routes } from 'react-router-dom';
import { ProtectedStateRoute } from './ProtectedStateRoute';
import { createMemoryHistory } from 'history';
import { mockLocation } from '../mocks/mockLocation';
import { Dashboard } from './Dashboard';
describe('ProtectedStateRoute test', () => {
  const setup = (location) => {
    const history = createMemoryHistory();
    return render(
      <Router location={location} navigator={history}>
        <Routes>
          <Route path='/' element={<ProtectedStateRoute route='/' />}>
            <Route element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </Router>
    );
  };

  test('should redirect', () => {
    setup({ state: null });
  });

  test('should render outlet', () => {
    setup(mockLocation);
  });
});
