import {
  IoAlertCircle,
  IoInformationCircle,
  IoCheckmarkCircle,
  IoCloseCircle,
} from 'react-icons/io5';
import type { ToastType } from '../types/toast';

type IconProps = {
  type: ToastType;
};

export function Icon({ type }: IconProps) {
  const iconSize = 28;

  const iconByType = () => {
    switch (type) {
      case 'success':
        return <IoCheckmarkCircle size={iconSize} />;
      case 'info':
        return <IoInformationCircle size={iconSize} />;
      case 'warning':
        return <IoAlertCircle size={iconSize} />;
      default:
        return <IoCloseCircle size={iconSize} />;
    }
  };

  return (
    <div className={`toast-icon-container toast-icon-${type}`}>
      {iconByType()}
    </div>
  );
}
