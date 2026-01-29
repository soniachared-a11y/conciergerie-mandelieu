import { type HTMLAttributes } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        clsx(
          "rounded-xl border border-white/10 bg-carbon/80 p-6 backdrop-blur-sm"
        ),
        className
      )}
      {...props}
    />
  );
}
