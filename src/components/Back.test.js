import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Back } from './Back';
describe('Back test', () => {
  const setup = () => {
    return render(
      <MemoryRouter initialEntries={['/detail']}>
        <Back></Back>
      </MemoryRouter>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should navigate', async () => {
    setup();
    fireEvent.click(screen.getByText('⬅ Back'));
  });
});
