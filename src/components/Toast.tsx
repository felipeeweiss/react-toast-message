type ToastProps = {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
};

export function Toast({ message, type = 'info' }: ToastProps) {
  return (
    <div className={`toast toast-${type}`}>
      <img src="" />
      <div>
        <h1>{type}</h1>
        <span>{message}</span>
      </div>
    </div>
  );
}
