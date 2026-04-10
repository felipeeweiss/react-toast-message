import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Toast } from '../components/Toast';

describe('Toast', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the message', () => {
    render(<Toast message="Something went wrong" onClose={() => {}} animation={false} />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('renders the title matching the type', () => {
    render(<Toast message="Saved!" type="success" onClose={() => {}} animation={false} />);
    expect(screen.getByText('Success')).toBeInTheDocument();
  });

  it('defaults to warning type when no type is provided', () => {
    render(<Toast message="Watch out" onClose={() => {}} animation={false} />);
    expect(screen.getByText('Warning')).toBeInTheDocument();
  });

  it('applies the correct type class to the root element', () => {
    const { container } = render(
      <Toast message="Info" type="info" onClose={() => {}} animation={false} />,
    );
    expect(container.firstChild).toHaveClass('toast-info');
  });

  it('applies toast-enter class when animation is enabled', () => {
    const { container } = render(
      <Toast message="Hello" type="success" onClose={() => {}} animation={true} />,
    );
    expect(container.firstChild).toHaveClass('toast-enter');
  });

  it('does not apply toast-enter class when animation is disabled', () => {
    const { container } = render(
      <Toast message="Hello" type="success" onClose={() => {}} animation={false} />,
    );
    expect(container.firstChild).not.toHaveClass('toast-enter');
  });

  it('calls onClose after 3300ms (3s auto-close + 300ms exit animation)', () => {
    const onClose = vi.fn();
    render(<Toast message="Bye" onClose={onClose} animation={false} />);

    expect(onClose).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(3300);
    });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when close button is clicked (after 300ms exit animation)', () => {
    const onClose = vi.fn();
    const { container } = render(<Toast message="Click me" onClose={onClose} animation={false} />);

    const closeButton = container.querySelector<SVGElement>('svg[style*="cursor: pointer"]')!;

    fireEvent.click(closeButton);
    expect(onClose).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders the progress bar', () => {
    const { container } = render(
      <Toast message="Loading" type="success" onClose={() => {}} animation={false} />,
    );
    expect(container.querySelector('.toast-progress')).toBeInTheDocument();
  });

  it('applies the correct type class to the progress bar', () => {
    const { container } = render(
      <Toast message="Loading" type="error" onClose={() => {}} animation={false} />,
    );
    expect(container.querySelector('.toast-progress')).toHaveClass('toast-progress-error');
  });
});
