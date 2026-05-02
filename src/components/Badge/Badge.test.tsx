import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/renderWithProviders';
import Badge from './Badge';

describe('Badge', () => {
  it('renders the label', () => {
    renderWithProviders(<Badge label="new" />);
    expect(screen.getByText('new')).toBeInTheDocument();
  });

  it('applies the success tone class', () => {
    renderWithProviders(<Badge label="ok" tone="success" />);
    expect(screen.getByText('ok').className).toMatch(/success/);
  });
});
