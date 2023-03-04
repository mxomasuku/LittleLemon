import { render, screen } from '@testing-library/react';
import App from './App';


test('fullpage rendering', () => {
  render(<App />)
  const heading = screen.getByText("Little Lemon"); 
  expect(heading).toBeInTheDocument()
})
