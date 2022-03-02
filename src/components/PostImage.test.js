import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PostImage } from './PostImage';
describe('PostImage test', () => {
  const setup = (thumbnail) => {
    return render(
      <BrowserRouter>
        <PostImage thumbnail={thumbnail}></PostImage>
      </BrowserRouter>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should have thumbnail', () => {
    setup('thumbnail');
    const elm = screen.getByAltText('thumbnail');
    expect(elm).toHaveAttribute('src', 'thumbnail');
  });

  test('should show default thumbnail', () => {
    setup();
    const elm = screen.getByAltText('thumbnail');
    expect(elm).toHaveAttribute('src', './not-found.jpg');
  });
});
