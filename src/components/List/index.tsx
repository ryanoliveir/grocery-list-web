import { AnimatePresence } from "motion/react";
import type { ReactNode } from "react";

interface ListProps {
  children: ReactNode;
}

export function List({ children }: ListProps) {
  return (
    <div className="w-full flex flex-col mt-10 gap-3">
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  );
}
