import { render, screen } from '@testing-library/react';
import { Button } from './Button';
describe('Button test', () => {
  const setup = () => {
    return render(<Button value='Testing Button' type='text'></Button>);
  };

  test('should render element', () => {
    setup();
  });

  test('should have value', async () => {
    setup();
    screen.getByText('Testing Button');
  });

  test('should have attr type', async () => {
    setup();
    expect(screen.getByText('Testing Button')).toHaveAttribute('type', 'text');
  });
});
