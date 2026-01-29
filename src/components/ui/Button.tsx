import { type ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        clsx(
          "rounded-lg px-6 py-3 font-medium transition-colors",
          variant === "primary" && "bg-primary text-carbon hover:opacity-90",
          variant === "secondary" && "bg-carbon text-primary hover:opacity-90",
          variant === "outline" &&
            "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-carbon"
        ),
        className
      )}
      {...props}
    />
  );
}
