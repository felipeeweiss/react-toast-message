import type { ToastType } from '../types/toast';

type TitleProps = {
  type: ToastType;
};

export function Title({ type }: TitleProps) {
  const textByType = () => {
    switch (type) {
      case 'success':
        return 'Success';
      case 'info':
        return 'Information';
      case 'warning':
        return 'Warning';
      default:
        return 'Error Occurred';
    }
  };

  return <span className="toast-title">{textByType()}</span>;
}
