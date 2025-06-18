import { useState, type ReactNode } from "react";
import { ToastContext } from "./ToastContext";
import type { ToastProps } from "../types/ToastContext";

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toastIsOpen, setToastIsOpen] = useState<boolean>(false);
  const [toastProps, setToastProps] = useState<ToastProps>({
    message: "",
    type: "",
  });

  const toggleToast = () => {
    setToastIsOpen(!toastIsOpen);
  };

  const createToast = ({ message, type }: ToastProps) => {
    toggleToast();
    setToastProps({ message, type });
    setTimeout(() => {
      setToastIsOpen(false);
    }, 5000);
  };

  return (
    <ToastContext.Provider
      value={{
        toggleToast,
        message: toastProps.message,
        toastIsOpen,
        createToast,
        type: toastProps.type,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}
