import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';
describe('Loading test', () => {
  const setup = () => {
    return render(<Loading></Loading>);
  };

  test('should render element', () => {
    setup();
  });

  test('should have loading text', () => {
    setup();
    expect(screen.getByText('Loading...')).toBeDefined();
  });
});
