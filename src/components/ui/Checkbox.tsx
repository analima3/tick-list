"use client";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const checkboxVariants = tv({
  base: "flex items-center justify-center border-2 w-5 h-5 rounded-sm m-1 transition-colors delay-50 ease-in",
  variants: {
    variant: {
      unchecked: "border-purple-400 hover:bg-purple-900",
      checked:
        "border-success-900 bg-success-900 hover:border-success-900 hover:bg-success-900",
    },
  },
  defaultVariants: {
    variant: "unchecked",
  },
});

type CheckedProps = ComponentProps<"input">;

export function Checkbox({ checked = false }: CheckedProps) {
  const variant = checked ? "checked" : "unchecked";

  return (
    <CheckboxPrimitive.Root
      className={checkboxVariants({ variant })}
      checked={variant === "checked" ? true : false}
    >
      <CheckboxPrimitive.Indicator>
        <Check size={12} color="white" strokeWidth="3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
