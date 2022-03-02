import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { Label } from './Label';
describe('Card test', () => {
  const setup = () => {
    return render(
      <Card>
        <Label>Card test</Label>
      </Card>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should have child', async () => {
    setup();
    screen.getByText('Card test');
  });
});
