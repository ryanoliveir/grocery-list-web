export type Item = {
  id: string;
  name: string;
  isChecked: boolean;
};

export type ItemList = {
  items: Item[];
};

export type ItemStore = {
  items: Item[];
  toggleItem: (id: string) => void;
  addItem: (itemName: string) => void;
  deleteItem: (id: string) => void;
};
