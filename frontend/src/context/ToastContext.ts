import { createContext } from "react";
import type { ToastContext as ToastContextType } from "../types/ToastContext";
export const ToastContext = createContext<ToastContextType>(
  {} as ToastContextType
);
