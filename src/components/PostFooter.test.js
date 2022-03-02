import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PostFooter } from './PostFooter';
describe('PostFooter test', () => {
  const setup = () => {
    return render(
      <BrowserRouter>
        <PostFooter author='testing' date={new Date()}></PostFooter>
      </BrowserRouter>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should have author', () => {
    setup();
    expect(screen.getByText('testing')).toBeDefined();
  });

  test('should have date', () => {
    setup();
    expect(screen.getByText(new Date().toDateString())).toBeDefined();
  });
});
