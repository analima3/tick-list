"use client";

import { Input } from "@/components/form/Input";
import { Label } from "@/components/form/Label";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Tag } from "@/components/ui/Tag";
import { options } from "@/utils/options";
import { Select } from "@/components/form/Select";

export default function Home() {
  return (
    <>
      <Checkbox checked />
      <Checkbox checked={false} />

      <Tag categoryName="bakery" />
      <Tag categoryName="drink" />
      <Tag categoryName="fruit" />
      <Tag categoryName="meat" />
      <Tag categoryName="vegetable" />

      <Button />

      <div className="group">
        <Label htmlFor="input-default">Item</Label>
        <Input id="input-default" />
      </div>

      <div className="group">
        <Label htmlFor="category">Categoria</Label>
        <Select options={options} />
      </div>
    </>
  );
}
