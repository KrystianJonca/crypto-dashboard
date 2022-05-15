import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsCard from './NewsCard';
import '@testing-library/jest-dom';

test('Displays news card', async () => {
  render(
    <NewsCard
      link="https://dummyimage.com/600x400/000/fff"
      image="https://dummyimage.com/600x400/000/fff"
      name="This is a breaking test news!"
    />
  );

  const nameElement = screen.getByText(/This is a breaking test news!/i);

  expect(nameElement).toBeVisible();
});
