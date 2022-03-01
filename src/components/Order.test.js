import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Order } from './Order';

describe('Order test', () => {
  const setup = () => {
    return render(
      <BrowserRouter>
        <Order selectOrder={() => {}}></Order>
      </BrowserRouter>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should update value', () => {
    setup();
    fireEvent.change(screen.getByTestId('order'), {
      target: { value: 'test' },
    });
  });
});
