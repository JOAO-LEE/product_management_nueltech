import { useContext } from "react";
import "./Toast.css";
import { ToastContext } from "../../context/ToastContext";
export function Toast() {
  const { message, type, toastIsOpen } = useContext(ToastContext);

  return (
    <div className={`toast ${type} ${toastIsOpen ? "show" : ""}`}>
      <p>{message}</p>
    </div>
  );
}
