import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { defaultURL } from '../config/config';
import { Config } from './Config';

describe('Config test', () => {
  const setup = (history) => {
    return render(
      <BrowserRouter history={history}>
        <Config></Config>
      </BrowserRouter>
    );
  };
  test('should render element', () => {
    setup();
  });

  test('should have input', () => {
    setup();
    expect(screen.getByRole('textbox')).toBeDefined();
  });

  test('should have default rss value', () => {
    setup();
    expect(screen.getByRole('textbox')).toHaveValue(defaultURL);
  });

  test('should show error', () => {
    setup();
    const elm = screen.getByRole('textbox');
    fireEvent.change(elm, { target: { value: 'testing' } });
    expect(elm).toBeDefined();
    expect(elm).toHaveValue('testing');
    expect(screen.getByText('Must be a valid RSS URL')).toBeDefined();
  });

  test('should pass regexp test', () => {
    setup();
    const elm = screen.getByRole('textbox');
    fireEvent.change(elm, { target: { value: defaultURL } });
    expect(elm).toBeDefined();
    expect(elm).toHaveValue(defaultURL);
  });
});
