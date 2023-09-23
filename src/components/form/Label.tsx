import { ComponentProps } from "react";

export function Label(props: ComponentProps<"label">) {
  return (
    <label
      {...props}
      className="select-none text-base-200 text-xs hover:text-purple-400 group-focus-within:text-purple-400"
    />
  );
}
