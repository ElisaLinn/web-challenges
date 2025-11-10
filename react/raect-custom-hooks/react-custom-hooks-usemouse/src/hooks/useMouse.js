import { useState, useEffect } from "react";

export default function useMouse() {
  const [mouse, setMouse] = useState([0, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse([event.clientX, event.clientY]);
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Leeres Dependency Array bedeutet: nur einmal ausführen

  return mouse;
}
