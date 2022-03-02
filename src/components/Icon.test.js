import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';
describe('Icon test', () => {
  const setup = () => {
    return render(<Icon icon='⚙'></Icon>);
  };

  test('should render element', () => {
    setup();
  });

  test('should have icon', async () => {
    setup();
    screen.getByText('⚙');
  });
});
