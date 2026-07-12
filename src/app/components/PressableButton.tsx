import { motion } from "motion/react";
import type { ReactNode } from "react";

type PressableButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  /** When false the button won't animate (used for disabled/placeholder states). */
  interactive?: boolean;
};

/**
 * A button wrapper that adds a subtle press + hover animation while keeping the
 * exact Figma styling (passed through className).
 */
export function PressableButton({
  children,
  onClick,
  className,
  disabled = false,
  interactive = true,
}: PressableButtonProps) {
  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={{ filter: "brightness(1)" }}
      whileHover={interactive && !disabled ? { filter: "brightness(0.95)" } : undefined}
      whileTap={interactive && !disabled ? { scale: 0.97 } : undefined}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      {children}
    </motion.button>
  );
}
