
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */