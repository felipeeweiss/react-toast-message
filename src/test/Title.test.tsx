import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Title } from '../components/Title';

describe('Title', () => {
  it('renders "Success" for success type', () => {
    render(<Title type="success" />);
    expect(screen.getByText('Success')).toBeInTheDocument();
  });

  it('renders "Information" for info type', () => {
    render(<Title type="info" />);
    expect(screen.getByText('Information')).toBeInTheDocument();
  });

  it('renders "Warning" for warning type', () => {
    render(<Title type="warning" />);
    expect(screen.getByText('Warning')).toBeInTheDocument();
  });

  it('renders "Error Occurred" for error type', () => {
    render(<Title type="error" />);
    expect(screen.getByText('Error Occurred')).toBeInTheDocument();
  });

  it('applies the toast-title class', () => {
    render(<Title type="success" />);
    expect(screen.getByText('Success')).toHaveClass('toast-title');
  });
});
