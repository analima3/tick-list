import { Apple, Carrot, Milk, Sandwich, Beef } from "lucide-react";
import { tv } from "tailwind-variants";
import { ElementType } from "react";

const tagVariants = tv({
  base: "flex items-center justify-between gap-[6px] rounded-full px-4 py-2",
  variants: {
    variant: {
      bakery: "bg-yellow-900 text-yellow-600",
      vegetable: "bg-green-900 text-green-600",
      fruit: "bg-orange-900 text-orange-600",
      drink: "bg-blue-900 text-blue-600",
      meat: "bg-pink-900 text-pink-600",
    },
  },
  defaultVariants: {
    variant: "bakery",
  },
});

enum categoriesKeys {
  bakery = "padaria",
  vegetable = "legume",
  fruit = "fruta",
  drink = "bebida",
  meat = "carne",
}

type CategoriesType = {
  [key: string]: ElementType;
};

interface TagProps {
  categoryName: keyof typeof categoriesKeys;
}

const categories: CategoriesType = {
  bakery: Sandwich,
  vegetable: Carrot,
  fruit: Apple,
  drink: Milk,
  meat: Beef,
};

export function Tag({ categoryName }: TagProps) {
  const CategoryIcon = categories[categoryName];

  return (
    <div className="flex">
      <div className={tagVariants({ variant: categoryName })}>
        <CategoryIcon size={16} strokeWidth={2} />
        <span className="font-semibold">{categoryName}</span>
      </div>
    </div>
  );
}
