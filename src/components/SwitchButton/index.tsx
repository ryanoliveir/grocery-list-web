import { motion } from "motion/react";
import { cn } from "../../libs/cn";
import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "../../store/theme";

export function SwitchButton() {
  const { isDark, toggleTheme } = useThemeStore();

  function onToggle() {
    toggleTheme();
  }
  return (
    <div
      className={cn(
        "flex items-center rounded-full p-1 w-12 h-6 cursor-pointer transition-colors duration-300",
        isDark ? "bg-brand" : "bg-border-primary",
      )}
      onClick={onToggle}
    >
      <motion.div
        layout
        className={cn(
          "rounded-full h-4 w-4 flex items-center justify-center bg-always-white",
          isDark && "ml-auto",
        )}
      >
        {isDark ? (
          <Moon className="text-brand" size={10} />
        ) : (
          <Sun className="text-border-primary" size={10} />
        )}
      </motion.div>
    </div>
  );
}
