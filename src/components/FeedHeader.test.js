import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { FeedHeader } from './FeedHeader';
describe('FeedHeader test', () => {
  const searchFn = jest.fn(() => {});
  const orderFn = jest.fn(() => {});
  const setup = () => {
    return render(
      <MemoryRouter>
        <FeedHeader orderData={orderFn} searchText={searchFn}></FeedHeader>
      </MemoryRouter>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should call search', () => {
    setup();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Testing component' },
    });
    expect(searchFn).toHaveBeenCalledTimes(1);
  });

  test('should call order', () => {
    setup();
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'Testing component' },
    });
    expect(orderFn).toHaveBeenCalledTimes(1);
  });
});
