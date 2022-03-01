import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PostImage } from './PostImage';
describe('PostImage test', () => {
  const setup = () => {
    return render(
      <BrowserRouter>
        <PostImage thumbnail='test'></PostImage>
      </BrowserRouter>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should have thumbnail', () => {
    setup();
    const elm = screen.getByAltText('thumbnail');
    expect(elm).toHaveAttribute('src', 'test');
  });
});
