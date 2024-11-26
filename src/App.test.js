import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Это обновленный проект/i);
  expect(linkElement).toBeInTheDocument();
});
