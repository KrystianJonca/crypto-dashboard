import React from 'react';
import { render, screen } from '@testing-library/react';
import Statistic from './Statistic';
import '@testing-library/jest-dom';

test('Displays title and data', async () => {
  render(<Statistic title="Test" data="Data" />);

  const titleElement = screen.getByText(/Test/i);
  const dataElement = screen.getByText(/Data/i);

  expect(titleElement).toBeInTheDocument();
  expect(dataElement).toBeInTheDocument();
});
