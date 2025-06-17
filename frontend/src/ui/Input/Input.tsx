import { type ComponentProps } from "react";

export function InputField({ ...rest }: ComponentProps<"input">) {
  return <input {...rest} />;
}

export function InputRoot({
  error = false,
  ...rest
}: { error?: boolean } & ComponentProps<"div">) {
  return <div {...rest} data-error={error} />;
}
