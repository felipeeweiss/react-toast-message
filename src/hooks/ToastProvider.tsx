import { useState, type ReactNode } from 'react';
import { ToastContext } from '../context/ToastContext';
import { Toast } from '../components/Toast';

interface ToastProviderProps {
  children: ReactNode;
  animation?: boolean;
}

export function ToastProvider({
  children,
  animation = true,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<any[]>([]);

  function addToast(message: string, type?: string) {
    const id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    setToasts((prev) => [...prev, { id, message, type }]);
  }

  function removeToast(id: number) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      <div className="toast-container">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            message={t.message}
            type={t.type}
            animation={animation}
            onClose={() => removeToast(t.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
