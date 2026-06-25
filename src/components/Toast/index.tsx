import { WarningCircleIcon } from "@phosphor-icons/react";
import { X } from "lucide-react";
import { motion } from "motion/react";

export function Toast() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: +50 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, bounce: 0.5 }}
    >
      <div className="flex gap-2 w-full justify-between items-center bg-danger py-2 px-3 rounded-xl mt-9">
        <WarningCircleIcon
          size={20}
          weight="fill"
          className="text-always-white"
        />
        <p className="flex-1 text-always-white">O item foi removido da lista</p>
        <X className="text-always-white" size={20} />
      </div>
    </motion.div>
  );
}
