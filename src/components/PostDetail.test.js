import { render, screen } from '@testing-library/react';
import { Route, Router, Routes } from 'react-router-dom';
import { PostDetail } from './PostDetail';
import { createMemoryHistory } from 'history';
import { mockLocation } from '../mocks/mockLocation';

describe('PostDetail test', () => {
  const setup = () => {
    const history = createMemoryHistory();
    return render(
      <Router location={mockLocation} navigator={history}>
        <Routes>
          <Route path='/' element={<PostDetail />}></Route>
        </Routes>
      </Router>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should have title', () => {
    setup();
    expect(screen.getByText('title')).toBeDefined();
  });

  test('should have content', () => {
    setup();
    expect(screen.getByText('content')).toBeDefined();
  });

  test('should render image', () => {
    setup();
    const elm = screen.getByAltText('thumbnail');
    expect(elm).toHaveAttribute('src', 'thumbnail');
  });

  test('should render author', () => {
    setup();
    expect(screen.getByText('author')).toBeDefined();
  });

  test('should render date', () => {
    setup();
    expect(screen.getByText(new Date().toDateString())).toBeDefined();
  });
});
