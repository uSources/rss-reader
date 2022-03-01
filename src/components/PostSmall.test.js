import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { mockItem } from '../mocks/mockItem';
import { PostSmall } from './PostSmall';
describe('PostSmall test', () => {
  const setup = () => {
    return render(
      <BrowserRouter>
        <PostSmall item={mockItem}></PostSmall>
      </BrowserRouter>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should have title', () => {
    setup();
    expect(screen.getByText('title')).toBeDefined();
  });

  test('should have author', () => {
    setup();
    expect(screen.getByText('author')).toBeDefined();
  });

  test('should have image', () => {
    setup();
    expect(screen.getByAltText('thumbnail')).toBeDefined();
  });

  test('should have date', () => {
    setup();
    expect(screen.getByText(new Date().toDateString())).toBeDefined();
  });
});
