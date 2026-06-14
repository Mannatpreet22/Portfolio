import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50";

const variants = {
  default: "bg-accent text-accent-foreground hover:opacity-90",
  outline: "border border-border bg-transparent hover:bg-muted",
  ghost: "hover:bg-muted text-muted-foreground hover:text-foreground",
} as const;

const sizes = {
  default: "h-10 px-5",
  sm: "h-9 px-3",
  icon: "h-9 w-9",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export function buttonClasses(
  variant: ButtonVariant = "default",
  size: ButtonSize = "default",
  className?: string
) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "default",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClasses(variant, size, className)} {...props} />
  );
}
