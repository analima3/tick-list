"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { SelectItem } from "./Item";
import { OptionType } from "@/@types/global";

interface SelectProps extends SelectPrimitive.SelectProps {
  options: OptionType[];
}

export function Select({ options }: SelectProps) {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger
        id="category"
        className="select-none w-full h-10 p-3 border border-base-300 bg-base-400 flex items-center justify-between gap-2 rounded-md outline-none focus:border-purple-400 text-base-200 data-[placeholder]:text-base-200 data-[state=open]:border-purple-400"
      >
        <SelectPrimitive.Value placeholder="Selecione a categoria" />

        <SelectPrimitive.Icon>
          <ChevronDown
            size={16}
            className="text-base-200 group-focus-within:text-purple-400"
          />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={4}
          className="cursor-pointer w-[--radix-select-trigger-width] border border-base-300 bg-base-400 rounded-md"
        >
          <SelectPrimitive.Viewport>
            {options.map((option) => (
              <SelectItem key={option.value} option={option} />
            ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.Arrow />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
