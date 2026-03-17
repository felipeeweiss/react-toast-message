import { IoClose } from 'react-icons/io5';
import { Icon } from './Icon';
import { Title } from './Title';
import type { ToastType } from '../types/toast';

type ToastProps = {
  message: string;
  type?: ToastType;
  onClose: () => void;
};

export function Toast({ message, type = 'warning', onClose }: ToastProps) {
  return (
    <div className={`toast toast-${type}`}>
      <Icon type={type} />

      <div className="toast-text-container">
        <Title type={type} />
        <span className="toast-message">{message}</span>
      </div>

      <IoClose
        size={22}
        color="lightgrey"
        onClick={onClose}
        style={{ cursor: 'pointer' }}
      />

      <div className={`toast-progress toast-progress-${type}`} />
    </div>
  );
}
