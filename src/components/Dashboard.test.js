import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Dashboard } from './Dashboard';
describe('Dashboard test', () => {
  const setup = () => {
    return render(
      <BrowserRouter>
        <Dashboard></Dashboard>
      </BrowserRouter>
    );
  };

  test('should render element', () => {
    setup();
  });
});
