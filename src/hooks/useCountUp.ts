"use client";

import { useEffect, useState } from "react";

export function useCountUp(
  end: number,
  duration = 2000,
  startOnView = true,
  suffix = ""
) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);

  useEffect(() => {
    if (!startOnView) {
      let start: number;
      const step = (timestamp: number) => {
        if (start === undefined) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      return;
    }
    return () => {};
  }, [end, duration, startOnView]);

  const start = () => {
    if (hasStarted) return;
    setHasStarted(true);
    let startTime: number;
    const step = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return { count, start, hasStarted };
}
