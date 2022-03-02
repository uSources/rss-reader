import { fireEvent, render, screen } from '@testing-library/react';
import { Select } from './Select';
describe('Select test', () => {
  const changeFn = jest.fn();
  const options = [
    {
      key: 'Date',
      value: 'pubDate',
    },
    {
      key: 'Author',
      value: 'author',
    },
    {
      key: 'Title',
      value: 'title',
    },
  ];

  const setup = () => {
    return render(
      <Select
        value='Date'
        name='order'
        onChange={changeFn}
        options={options}
      ></Select>
    );
  };

  test('should render element', () => {
    setup();
  });

  it('should correctly set default option', () => {
    setup();
    expect(screen.getByRole('option', { name: 'Date' }).selected).toBe(true);
  });

  test('should call change', async () => {
    setup();
    const elm = screen.getByRole('combobox');
    fireEvent.change(elm, { target: { value: 'Author' } });
    expect(changeFn).toHaveBeenCalledTimes(1);
  });
});
