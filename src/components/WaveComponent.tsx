import React, { useState, useEffect, CSSProperties } from "react";
// finish implementing this later

const WaveComponent: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    const lineStyle: CSSProperties = {
      position: 'absolute',
      left: `${mousePosition.x}px`,
      top: `${mousePosition.y}px`,
      width: '100px', // Length of the line
      height: '2px', // Thickness of the line
      backgroundColor: 'black', // Color of the line
      transform: 'translate(-50%, -50%)' // Center the line on the cursor
    };
  
    return <div style={lineStyle}></div>;
};

export default WaveComponent;
