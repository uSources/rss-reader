import { render } from '@testing-library/react';
import { Route, Router, Routes } from 'react-router-dom';
import { ProtectedStorageRoute } from './ProtectedStorageRoute';
import { createMemoryHistory } from 'history';
import { Dashboard } from './Dashboard';
describe('ProtectedStorageRoute test', () => {
  const history = createMemoryHistory();
  const setup = () => {
    return render(
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route
            path='/'
            element={<ProtectedStorageRoute index='url' route='/' />}
          >
            <Route element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </Router>
    );
  };

  test('should redirect', () => {
    localStorage.clear();
    setup();
  });

  test('should render outlet', () => {
    localStorage.setItem('url', 'testingurl');
    setup();
  });
});
