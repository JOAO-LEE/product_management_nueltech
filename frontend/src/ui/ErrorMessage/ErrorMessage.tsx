import "./ErrorMessage.css";
export function ErrorMessage({ message }: { message: string | undefined }) {
  return (
    <div className="error">
      <i className="ph ph-warning"></i>
      <p>{message}</p>
    </div>
  );
}
