type ToastProps = {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
};

export function Toast({ message, type = 'info' }: ToastProps) {
  return <div className={`toast toast-${type}`}>{message}</div>;
}
