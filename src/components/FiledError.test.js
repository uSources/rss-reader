import { render, screen } from '@testing-library/react';
import { FieldError } from './FieldError';
describe('FieldError test', () => {
  const setup = () => {
    return render(<FieldError message='Testing message'></FieldError>);
  };

  test('should render element', () => {
    setup();
  });

  test('should have message', async () => {
    setup();
    screen.getByText('Testing message');
  });
});
