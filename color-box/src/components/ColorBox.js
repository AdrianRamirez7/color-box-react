import React, { useState } from 'react';

const ColorBox = () => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
  const [currentColor, setCurrentColor] = useState('white');
  const [showColorName, setShowColorName] = useState(true);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleClick = () => {
    if (showColorName === true) {
      setCurrentColor(getRandomColor());
    } else {
      setCurrentColor(getRandomColor());
      setShowColorName(true);
    }
  };

  return (
    <div className="color-box" style={{ backgroundColor: currentColor }} onClick={handleClick}>
      {showColorName ? currentColor : false}
    </div>
  );
};

export default ColorBox;
