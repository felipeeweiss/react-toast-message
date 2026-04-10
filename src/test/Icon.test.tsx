import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Icon } from '../components/Icon';

describe('Icon', () => {
  it.each([
    ['success', 'toast-icon-success'],
    ['info', 'toast-icon-info'],
    ['warning', 'toast-icon-warning'],
    ['error', 'toast-icon-error'],
  ] as const)('renders container with class %s for type %s', (type, expectedClass) => {
    const { container } = render(<Icon type={type} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('toast-icon-container');
    expect(wrapper).toHaveClass(expectedClass);
  });

  it('renders an svg icon inside the container', () => {
    const { container } = render(<Icon type="success" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
