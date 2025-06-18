export function Toast({ message }: { message: string }) {
  return (
    <div style={{ background: "black", padding: "1.5rem" }}>
      <p>{message}</p>
    </div>
  );
}
