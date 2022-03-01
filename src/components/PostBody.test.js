import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PostBody } from './PostBody';

describe('PostBody test', () => {
  const setup = () => {
    return render(
      <BrowserRouter>
        <PostBody title='Title'>
          <h2>Children</h2>
        </PostBody>
      </BrowserRouter>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should have title', () => {
    setup();
    expect(screen.getByText('Title')).toBeDefined();
  });

  test('should have children', () => {
    setup();
    expect(screen.getByText('Children')).toBeDefined();
  });
});
