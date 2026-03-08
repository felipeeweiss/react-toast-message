import { useState } from 'react';
import { ToastContext } from '../context/ToastContext';
import { Toast } from '../components/Toast';

export function ToastProvider({ children }: any) {
  const [toasts, setToasts] = useState<any[]>([]);

  function addToast(message: string, type?: string) {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      <div className="toast-container">
        {toasts.map((t) => (
          <Toast key={t.id} message={t.message} type={t.type} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
