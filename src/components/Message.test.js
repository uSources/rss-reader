import { render, screen } from '@testing-library/react';
import { Route, Router, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Message } from './Message';
import { Label } from './Label';
describe('Message test', () => {
  const setup = () => {
    const history = createMemoryHistory();
    return render(
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route
            path='/'
            element={
              <Message
                message='Testing Message'
                children={<Label>Child Label</Label>}
              />
            }
          ></Route>
        </Routes>
      </Router>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should have message and child element', () => {
    setup();
    expect(screen.getByText('Testing Message')).toBeDefined();
    expect(screen.getByText('Child Label')).toBeDefined();
  });
});
