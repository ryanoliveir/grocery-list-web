import { motion } from "motion/react";

export function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="text-content-tertiary text-center mt-10"
    >
      Sem items na lista ainda.
    </motion.div>
  );
}
