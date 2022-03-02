import { fireEvent, render, screen } from '@testing-library/react';
import { InputLabel } from './InputLabel';
describe('InputLabel test', () => {
  const changeFn = jest.fn();
  const setup = () => {
    return render(
      <InputLabel
        value='Value'
        placeholder='Placeholder'
        onChange={changeFn}
        label='Label'
      ></InputLabel>
    );
  };

  test('should render element', () => {
    setup();
  });

  test('should have value', async () => {
    setup();
    screen.getByDisplayValue('Value');
  });

  test('should have placeholder', async () => {
    setup();
    screen.getByPlaceholderText('Placeholder');
  });

  test('should have label', async () => {
    setup();
    screen.getByText('Label');
  });

  test('should call change', async () => {
    setup();
    const elm = screen.getByRole('textbox');
    fireEvent.change(elm, { target: { value: 'testing component...' } });
    expect(changeFn).toHaveBeenCalledTimes(1);
  });
});
