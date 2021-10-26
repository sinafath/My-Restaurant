import { useState, useCallback } from "react";
import { useIsomorphicLayoutEffect } from "react-use";

export default function useMediaQuery(width: number) {
  const [targetReached, setTargetReached] = useState(false);
  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    } 
  }, []);
  useIsomorphicLayoutEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.onchange = updateTarget.bind(null);
    if (media.matches) {
      setTargetReached(true);
    }
  }, []);

  return targetReached;
}