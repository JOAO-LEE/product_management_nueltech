import { useState, type ReactNode } from "react";
import { ToastContext } from "./ToastContext";

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toastIsOpen, setToastIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const toggleToast = () => {
    setToastIsOpen(!toastIsOpen);
  };

  const createToastMessage = () => {
    setMessage(message);
  };

  return (
    <ToastContext.Provider
      value={{
        toggleToast,
        message,
        toastIsOpen,
        createToastMessage,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}
