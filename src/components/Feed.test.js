import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Feed } from './Feed';
import { mockItem } from '../mocks/mockItem';
describe('Feed test', () => {
  const setup = (mockItems) => {
    return render(
      <BrowserRouter>
        <Feed feed={mockItems}></Feed>
      </BrowserRouter>
    );
  };

  test('should render element', () => {
    const mockItems = [mockItem];
    setup(mockItems);
  });

  test('should render not elements message', () => {
    const mockItems = [];
    setup(mockItems);
    expect(screen.getByText('Nothing to see here')).toBeDefined();
  });
});
