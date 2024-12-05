// src/useScrollTo.ts
import { useCallback } from "react";

const useScrollTo = () => {
  const scrollTo = useCallback((id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return { scrollTo };
};

export default useScrollTo;
