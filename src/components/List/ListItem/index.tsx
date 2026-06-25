import { Check, Trash2 } from "lucide-react";
import { cn } from "../../../libs/cn";
import { useListStore } from "../../../store/item";
import { motion } from "motion/react";
interface ItemProps {
  id: string;
  name: string;
  isChecked: boolean;
  notifyDelete: () => void;
}

export function ListItem({ id, name, isChecked, notifyDelete }: ItemProps) {
  const { toggleItem, deleteItem } = useListStore();

  function handleDelete() {
    deleteItem(id);
    notifyDelete();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="flex gap-2 w-full justify-between items-center bg-background-secondary py-2 px-3 rounded-xl">
        <div
          className={cn(
            "h-4 w-4 bg-background-secondary rounded-md border border-border-primary hover:border-border-hover ",
            isChecked &&
              "bg-brand border-brand flex items-center justify-center  border-none",
          )}
          onClick={() => toggleItem(id)}
        >
          {isChecked && <Check className="text-always-white" size={12} />}
        </div>
        <p className="flex-1 text-content-secondary">{name}</p>
        <Trash2
          className="text-content-tertiary"
          size={16}
          onClick={handleDelete}
        />
      </div>
    </motion.div>
  );
}
