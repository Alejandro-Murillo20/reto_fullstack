// src/components/atoms/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Al cambiar la ruta, el scroll sube al punto 0,0 de forma suave
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null; // Este componente no renderiza nada visual
};

export default ScrollToTop;
