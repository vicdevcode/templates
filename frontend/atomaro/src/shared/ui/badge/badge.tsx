import { FC, HTMLAttributes } from "react";
import { cn } from "@/shared/lib/utils";

type BadgeVariant = "primary" | "secondary";
type BadgeColors =
  | "info"
  | "warning"
  | "error"
  | "success"
  | "neutral"
  | "status-01"
  | "status-02"
  | "status-03"
  | "status-04"
  | "status-05"
  | "status-06";
type BadgeSize = "md" | "sm";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  color?: BadgeColors;
  size?: BadgeSize;
  withDot?: boolean;
}

export const Badge: FC<BadgeProps> = ({
  className,
  variant = "primary",
  color = "info",
  size = "md",
  withDot = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center flex-shrink-0 gap-1 rounded-[8px]",
        size == "md"
          ? "py-1 px-2 description-l-strong"
          : size == "sm"
            ? "py-0.5 px-1.5 description-s-strong"
            : "",
        variant == "primary"
          ? `text-${color}-on-${color} bg-${color}-soft`
          : variant == "secondary"
            ? `text-${color}-on-container bg-${color}-container`
            : "",
        className,
      )}
      {...props}
    >
      {withDot && (
        <div
          className={cn(
            "rounded-full",
            size == "md" ? "h-2 w-2" : size == "sm" ? "h-1.5 w-1.5" : "",
            "bg-current",
          )}
        />
      )}
      {props.children}
    </div>
  );
};
