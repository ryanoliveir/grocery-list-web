import { useState } from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { useListStore } from "../../../store/item";

export function ListInput() {
  const [value, setValue] = useState("");
  const { addItem } = useListStore();

  function handleAddItem() {
    if (!value.trim()) return;

    addItem(value);
    setValue("");
  }

  function handleFocus() {
    setTimeout(() => {
      document
        .querySelector("button")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  }

  return (
    <>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={handleFocus}
      />
      <Button onClick={handleAddItem} />
    </>
  );
}
