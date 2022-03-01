import { render, screen } from '@testing-library/react';
import { Route, Router, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Error } from './Error';
describe('Error test', () => {
  const setup = () => {
    const history = createMemoryHistory();
    return render(
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route path='/' element={<Error />}></Route>
        </Routes>
      </Router>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should have error message', () => {
    setup();
    expect(screen.getByText('Error, Something went wrong!')).toBeDefined();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/config');
  });
});
