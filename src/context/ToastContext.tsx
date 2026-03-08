import { createContext, useContext } from 'react';

type ToastContextType = {
  addToast: (message: string, type?: string) => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used inside ToastProvider');
  }
  return context;
}
