import { OptionType } from "@/@types/global";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "lucide-react";

interface SelectItemProps {
  option: OptionType;
}

export function SelectItem({ option }: SelectItemProps) {
  const { value, Icon, text, iconColor } = option;

  return (
    <SelectPrimitive.Item
      value={value}
      className="border-b border-base-300 p-3 flex items-center justify-between gap-2 outline-none hover:bg-base-300 data-[state=checked]:bg-base-300"
    >
      <div className="flex items-center gap-2 text-base-100">
        <Icon className={iconColor} size={16} strokeWidth={2} />
        <SelectPrimitive.ItemText className="text-sm  outline-none">
          {text}
        </SelectPrimitive.ItemText>
      </div>

      <SelectPrimitive.ItemIndicator>
        <Check size={16} className="text-purple-400" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}
