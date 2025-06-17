import type { ComponentProps, ReactNode } from "react";

export default function Button({
  children,
  ...rest
}: { children: ReactNode } & ComponentProps<"button">) {
  return <button {...rest}>{children}</button>;
}
 
