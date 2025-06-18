export type ToastProps = {
  message: string;
  type: "success" | "error" | "";
};

export type ToastContext = {
  toastIsOpen: boolean;
  toggleToast: () => void;
  message: string;
  createToast: (toastProps: ToastProps) => void;
  type: "success" | "error" | "";
};
