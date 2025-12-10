import { useEffect, useState } from "react";

export const useClock = (delay = 1000) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  return time;
};
