import React, { useState, useEffect } from 'react';
import './SqureAnimation.css';

const SqureAnimation = () => {
  const [squares, setSquares] = useState([]);

  const createSqure = () => {
    const square = [];
    for (let i = 0; i < 200; i++) {
      square.push({
      
        backgroundColor: RandomColor(),
      });
    }
    setSquares(square);

    setInterval(() => {
      setSquares((prevSquares) => {
        const newSquares = [...prevSquares];
        newSquares.forEach((square) => {
          square.backgroundColor = RandomColor();
        });
        return newSquares;
      });
    }, 2000);
  };

  useEffect(() => {
    createSqure();
  }, []);

  const RandomColor = () => {
    return Math.random() < 0.5 ? 'black' : 'white';
  };

  return (
    <div className="squre-container">
      {squares.map((square) => (
        <div
          key={square.key}
          className="single-square {
"
          style={{
            backgroundColor: square.backgroundColor,
          }}
        ></div>
      ))}
    </div>
  );
};

export default SqureAnimation;
