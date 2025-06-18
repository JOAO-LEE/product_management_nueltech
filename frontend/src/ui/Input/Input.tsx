import { type ComponentProps } from "react";
import "./Input.css";
import type { FieldError } from "react-hook-form";

export function InputField({ ...rest }: ComponentProps<"input">) {
  return <input {...rest} className="input-field" />;
}

export function InputRoot({
  error = false,
  ...rest
}: { error?: FieldError } & ComponentProps<"div">) {
  return <div {...rest} data-error={error} className="input-wrapper" />;
}
