import { LoaderCircle } from "lucide-react";
import { cn } from "../../utils/utils";

export const primaryButtonClassnames = cn(
  "group cursor-pointer px-5 py-3 bg-gradient-to-br from-primary to-primary/90 text-secondary border border-text-100/5 rounded-md text-sm shadow-md",
  "font-medium hover:bg-primary/85 active:bg-accent/70 transition-colors ease-in-out duration-300",
  "disabled:bg-primary/60 disabled:bg-none disabled:!cursor-not-allowed disabled:pointer-events-none"
);

interface PrimaryButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className,
  children,
  loading,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className={cn(primaryButtonClassnames, className)}
      disabled={loading || props.disabled}
      {...props}
    >
      <span
        className={cn(
          "inline-flex items-center justify-center transition-all ease-in-out duration-200"
        )}
      >
        {loading && (
          <LoaderCircle
            className="text-secondary animate-spin h-4 w-4 mr-2"
            strokeWidth={3}
          />
        )}
        {children}
      </span>
    </button>
  );
};
