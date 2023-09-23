import { OptionType } from "@/@types/global";
import { Apple, Beef, Carrot, Milk, Sandwich } from "lucide-react";

export const options: OptionType[] = [
  {
    text: "Padaria",
    Icon: Sandwich,
    value: "1",
    iconColor: "text-yellow-600",
  },
  {
    text: "Legume",
    Icon: Carrot,
    value: "2",
    iconColor: "text-green-600",
  },
  {
    text: "Carne",
    Icon: Beef,
    value: "3",
    iconColor: "text-pink-600",
  },
  {
    text: "Fruta",
    Icon: Apple,
    value: "4",
    iconColor: "text-orange-600",
  },
  {
    text: "Bebida",
    Icon: Milk,
    value: "5",
    iconColor: "text-blue-600",
  },
];
