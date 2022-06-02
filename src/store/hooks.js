import { MOBILE_MAX_WIDTH_SIZE, TABLET_MAX_WIDTH_SIZE } from "./Data";
import { useState, useEffect } from "react";

export const useMedia = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile: width < MOBILE_MAX_WIDTH_SIZE,
    isTablet: width >= MOBILE_MAX_WIDTH_SIZE && width < TABLET_MAX_WIDTH_SIZE,
    isDesktop: width >= TABLET_MAX_WIDTH_SIZE,
  };
};
