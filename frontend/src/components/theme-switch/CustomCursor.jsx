import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {cursorVisible && (
        <div
          style={{
            position: "fixed",
            top: -15,
            left: -15,
            pointerEvents: "none",
            zIndex: 10000,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></div>
      )}
    </>
  );
};

export default CustomCursor;
