import { fireEvent, render, screen } from '@testing-library/react';
import { Searchbar } from './Searchbar';

describe('Searchbar test', () => {
  const setup = () => {
    return render(<Searchbar setSearchtext={() => {}}></Searchbar>);
  };

  test('should render element', () => {
    setup();
  });

  test('should have input', () => {
    setup();
    const elm = screen.getByRole('textbox');
    expect(elm).toBeDefined();
  });

  test('should have placeholder', () => {
    setup();
    const elm = screen.getByPlaceholderText('Search by title...');
    expect(elm).toBeDefined();
  });

  test('should update value', () => {
    setup();
    const elm = screen.getByPlaceholderText('Search by title...');
    fireEvent.change(elm, { target: { value: 'testing' } });
    expect(elm).toBeDefined();
    expect(elm).toHaveValue('testing');
  });
});
