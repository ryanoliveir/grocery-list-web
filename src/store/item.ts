import { create } from "zustand";
import type { ItemStore } from "../types/item";
import { v4 as uuid } from "uuid";

export const useListStore = create<ItemStore>((set) => ({
  items: [
    {
      id: uuid(),
      name: "Pão de forma",
      isChecked: true,
    },
    {
      id: uuid(),
      name: "Frango",
      isChecked: false,
    },
  ],
  addItem: (itemName) =>
    set((state) => ({
      items: [...state.items, { id: uuid(), name: itemName, isChecked: false }],
    })),
  toggleItem: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item,
      ),
    })),
  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));
