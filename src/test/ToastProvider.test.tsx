import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { ToastProvider } from '../hooks/ToastProvider';
import { useToast } from '../context/ToastContext';

function TriggerToast({
  message,
  type,
}: {
  message: string;
  type?: string;
}) {
  const { addToast } = useToast();
  return (
    <button onClick={() => addToast(message, type)}>Add Toast</button>
  );
}

describe('ToastProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders children', () => {
    render(
      <ToastProvider>
        <p>Hello world</p>
      </ToastProvider>,
    );
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('shows a toast when addToast is called', () => {
    render(
      <ToastProvider>
        <TriggerToast message="Toast added!" type="success" />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Add Toast' }));

    expect(screen.getByText('Toast added!')).toBeInTheDocument();
    expect(screen.getByText('Success')).toBeInTheDocument();
  });

  it('removes the toast automatically after ~3.3s', () => {
    render(
      <ToastProvider>
        <TriggerToast message="Will disappear" type="info" />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Add Toast' }));
    expect(screen.getByText('Will disappear')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(3400);
    });

    expect(screen.queryByText('Will disappear')).not.toBeInTheDocument();
  });

  it('can show multiple toasts at the same time', () => {
    render(
      <ToastProvider>
        <TriggerToast message="First toast" type="success" />
        <TriggerToast message="Second toast" type="error" />
      </ToastProvider>,
    );

    const buttons = screen.getAllByRole('button', { name: 'Add Toast' });
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);

    expect(screen.getByText('First toast')).toBeInTheDocument();
    expect(screen.getByText('Second toast')).toBeInTheDocument();
  });
});

describe('useToast', () => {
  it('throws when used outside ToastProvider', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    function BadComponent() {
      useToast();
      return null;
    }

    expect(() => render(<BadComponent />)).toThrowError(
      'useToast must be used inside ToastProvider',
    );

    consoleError.mockRestore();
  });
});
