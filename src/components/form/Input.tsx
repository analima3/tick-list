import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  id: string;
}

export function Input({ id, ...props }: InputProps) {
  return (
    <div className="h-10 flex items-center justify-center bg-base-500 rounded-md border border-0.5 border-base-300 focus-within:border focus-within:border-0.5 focus-within:border-purple-400">
      <input
        {...props}
        id={id}
        className="px-3 w-full h-full flex-1 bg-transparent border-0 text-base-100 text-sm outline-none"
      />
    </div>
  );
}
