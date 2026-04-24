// src/components/atoms/Notification.jsx
import React, { useEffect } from 'react';

const Notification = ({ message, onClose }) => {
  // El mensaje desaparecerá solo después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-10 z-[100] bg-neutral-900 text-white px-6 py-4 shadow-2xl border-l-4 border-slate-400 animate-fade-in-down">
      <div className="flex items-center gap-3">
        <span className="text-slate-300 font-bold">✓</span>
        <p className="text-[10px] uppercase tracking-[0.2em] font-medium">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Notification;
