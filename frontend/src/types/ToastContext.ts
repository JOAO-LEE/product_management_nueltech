export type ToastContext = {
  toastIsOpen: boolean;
  toggleToast: () => void;
  message: string;
  createToastMessage: () => void;
};
