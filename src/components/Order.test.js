import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Order } from './Order';

describe('Order test', () => {
  const orderFn = jest.fn(() => {});
  const setup = () => {
    return render(
      <BrowserRouter>
        <Order selectOrder={orderFn}></Order>
      </BrowserRouter>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should update value', () => {
    setup();
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'test' },
    });
    expect(orderFn).toHaveBeenCalledTimes(1);
  });
});
