import { render, screen } from '@testing-library/react';
import { Label } from './Label';
describe('Label test', () => {
  const setup = () => {
    return render(<Label>Testing Component</Label>);
  };

  test('should render element', () => {
    setup();
  });

  test('should have icon', async () => {
    setup();
    screen.getByText('Testing Component');
  });
});
