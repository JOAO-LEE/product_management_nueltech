import type { ComponentProps, ReactNode } from "react";
import "./Button.css"

export default function Button({
  children,
  ...rest
}: { children: ReactNode } & ComponentProps<"button">) {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
}
