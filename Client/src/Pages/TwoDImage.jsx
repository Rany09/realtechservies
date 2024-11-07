// TwoDImage.js
import React, { useEffect, useRef } from 'react';

const TwoDImage = ({ imageUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      // Clear the canvas before drawing
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the image onto the canvas
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // Cleanup function to avoid memory leaks
    return () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [imageUrl]);

  return (
    <canvas ref={canvasRef} width={500} height={500} style={{ border: '1px solid black' }} />
  );
};

export default TwoDImage;
