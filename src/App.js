import React, { useState } from 'react';
import './App.css';

function calculateBoardFeet(width, length, thickness) {
  return ((width * length * thickness)/12);
}

export default function App() {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [thickness, setThickness] = useState("");
  const solution = calculateBoardFeet(width, length, thickness);

  return (
    <div className="App">
      <div className="width">
        <label for="width">Width:</label>
        <input 
          type="text"
          id="width"
          placeholder="width"
          value={width}
          onChange={e => setWidth(e.target.value)}
          />
      </div>
      <div className="length">
        <label for="length">Length:</label>
        <input 
          type="text"
          id="length"
          placeholder="length"
          value={length}
          onChange={e => setLength(e.target.value)}
          />
      </div>
      <div className="thickness">
        <label for="thickness">Thickness:</label>
        <input 
          type="text"
          id="thickness"
          placeholder="thickness"
          value={thickness}
          onChange={e => setThickness(e.target.value)}
          />
      </div>
      <div className="solution">
        <span>{solution}</span>
      </div>
    </div>
  );
}