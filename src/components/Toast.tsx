import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { Icon } from './Icon';
import { Title } from './Title';
import type { ToastType } from '../types/toast';

type ToastProps = {
  message: string;
  type?: ToastType;
  onClose: () => void;
  animation: boolean;
};

export function Toast({
  message,
  type = 'warning',
  onClose,
  animation,
}: ToastProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`toast toast-${type} ${animation ? 'toast-enter' : ''} ${animation && isExiting ? 'toast-exit' : ''}`}
    >
      <Icon type={type} />

      <div className="toast-text-container">
        <Title type={type} />
        <span className="toast-message">{message}</span>
      </div>

      <IoClose
        size={22}
        color="lightgrey"
        onClick={handleClose}
        style={{ cursor: 'pointer' }}
      />

      <div className={`toast-progress toast-progress-${type}`} />
    </div>
  );
}
