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

  test('should have button', () => {
    setup();
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('should update value', () => {
    setup();
    const elm = screen.getByRole('textbox');
    fireEvent.change(elm, { target: { value: 'testing' } });
    expect(elm).toBeDefined();
    expect(elm).toHaveValue('testing');
  });

  test('should click button and send form', async () => {
    setup();
    const buttonElm = screen.getByRole('button');
    const inputElm = screen.getByRole('textbox');
    fireEvent.change(inputElm, { target: { value: 'testing' } });
    fireEvent.submit(buttonElm);
  });
});
