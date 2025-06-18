export function ErrorMessage({ message }: { message: string | undefined }) {
  return (
    <div>
      <i className="ph ph-warning"></i>
      <p>{message}</p>
    </div>
  );
}
