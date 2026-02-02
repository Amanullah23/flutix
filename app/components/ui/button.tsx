import * as React from "react";
//import { cn } from "@/lib/utils";
import { cn } from "../../lib/utils";


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variant === "default" &&
            "bg-indigo-600 text-white hover:bg-indigo-700",
          variant === "outline" &&
            "border border-gray-300 bg-transparent hover:bg-gray-100",
          size === "default" && "h-10 px-4 py-2 rounded-xl",
          size === "lg" && "h-12 px-6 text-lg rounded-2xl",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
