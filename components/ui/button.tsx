import React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-accent-primary text-text-dark hover:bg-accent-hover active:bg-accent-hover",
  secondary: "border-border-medium hover:border-border-accent bg-bg-secondary text-text-primary border",
  ghost: "hover:bg-bg-secondary bg-transparent text-text-primary",
  outline: "border-border-medium hover:border-border-accent hover:bg-bg-secondary border bg-transparent text-text-primary",
};

const buttonSize: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3.5 text-sm [&_svg]:size-3.5",
  md: "min-h-10 px-4 text-sm [&_svg]:size-4",
  lg: "min-h-12 px-5 text-base [&_svg]:size-5",
};

const contentGap: Record<ButtonSize, string> = {
  sm: "gap-1.5",
  md: "gap-2",
  lg: "gap-2.5",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, startIcon, endIcon, variant = "primary", size = "md", fullWidth, loading, disabled, type = "button", ...rest },
  ref,
) {
  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      data-loading={loading ? "" : undefined}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-full font-medium transition-colors select-none",
        "focus-visible:outline-accent-primary focus-visible:outline-2 focus-visible:outline-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variantClass[variant],
        buttonSize[size],
        fullWidth && "w-full",
        loading && "relative",
        className,
      )}
      {...rest}
    >
      {loading ? (
        <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <Spinner />
        </span>
      ) : null}

      <span className={cn("inline-flex items-center justify-center", contentGap[size], loading && "invisible")}>
        {startIcon ? (
          <span className="inline-flex shrink-0" aria-hidden>
            {startIcon}
          </span>
        ) : null}

        {children != null && children !== false ? <span className="min-w-0 truncate">{children}</span> : null}

        {endIcon ? (
          <span className="inline-flex shrink-0" aria-hidden>
            {endIcon}
          </span>
        ) : null}
      </span>
    </button>
  );
});

Button.displayName = "Button";

function Spinner() {
  return (
    <svg className="size-5 animate-spin text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export default React.memo(Button);
