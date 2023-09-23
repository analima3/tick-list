import { Plus } from "lucide-react";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="m-0 bg-purple-600 rounded-full flex items-center justify-center p-2 transition-colors delay-50 ease-in hover:bg-purple-900"
    >
      <Plus size={24} className="text-gray-100" />
    </button>
  );
}
