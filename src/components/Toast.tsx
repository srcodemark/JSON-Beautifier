import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onHide: () => void;
}

export function Toast({ message, isVisible, onHide }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onHide, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
      <CheckCircle className="w-4 h-4 text-green-400" />
      <span className="text-sm">{message}</span>
    </div>
  );
}