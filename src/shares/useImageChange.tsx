import type { RefObject } from "react";
import { useBoolean, useIsomorphicLayoutEffect } from "react-use";

export default function useImageChange(
  sizes: number[],
  image: RefObject<HTMLElement>
): [boolean, (nextValue?: any) => void] {
  const [newImage, setNewImage] = useBoolean(true);
  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      sizes.forEach((size) => {
        if (size === image.current?.offsetWidth) {
          setNewImage(true);console.log(size)
        }
      });
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return [newImage, setNewImage];
}
