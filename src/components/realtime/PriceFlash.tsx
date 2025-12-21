/**
 * PriceFlash Component
 * Displays price value with green/red flash animation on changes
 */

"use client";

import { memo, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface PriceFlashProps {
  value: number;
  previousValue?: number;
  formatter: (value: number) => string;
  className?: string;
}

export const PriceFlash = memo(function PriceFlash({
  value,
  previousValue,
  formatter,
  className,
}: PriceFlashProps) {
  const [flashClass, setFlashClass] = useState("");

  useEffect(() => {
    if (previousValue === undefined || previousValue === value) return;

    const direction = value > previousValue ? "green" : "red";
    setFlashClass(`flash-${direction}`);

    const timer = setTimeout(() => {
      setFlashClass("");
    }, 300);

    return () => clearTimeout(timer);
  }, [value, previousValue]);

  return (
    <span
      className={cn(
        "transition-smooth",
        value > (previousValue ?? value) && "text-success",
        value < (previousValue ?? value) && "text-danger",
        flashClass,
        className
      )}
    >
      {formatter(value)}
    </span>
  );
});
