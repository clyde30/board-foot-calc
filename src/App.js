import React, { useState } from 'react';
import './App.css';

function calculateBoardFeet(width, length, thickness) {
  return ((width * length * thickness)/12);
}

export default function App() {
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [thickness, setThickness] = useState(0);
  const [price, setPrice] = useState(0);
  const solution = calculateBoardFeet(width, length, thickness);

  return (
    <div className="App">
      <div className="input">
        <label for="width">Width:</label>
        <input 
          type="range"
          min="1"
          max="24"
          id="width"
          placeholder="width"
          value={width}
          onChange={e => setWidth(e.target.value)}
          />
          <div>
            <input 
              type="number"
              placeholder={width}
              value={width}
              onChange={e => setWidth(e.target.value)}
            />
          </div>
      </div>
      <div className="input">
        <label for="length">Length:</label>
        <input 
          type="range"
          min="1"
          max="16"
          id="length"
          placeholder="length"
          value={length}
          onChange={e => setLength(e.target.value)}
          />
          <div>
            <input 
              type="number"
              placeholder={length}
              value={length}
              onChange={e => setLength(e.target.value)}
            />
          </div>
      </div>
      <div className="input">
        <label for="thickness">Thickness:</label>
        <select id="thickness" value={thickness} onChange={e => setThickness(e.target.value)}>
          <option value=".50">1/2</option>
          <option value=".75">3/4</option>
          <option value="1">4/4</option>
          <option value="1.25">5/4</option>
          <option value="1.50">6/4</option>
          <option value="2">8/4</option>
        </select>
      </div>
      <div className="input">
        <label for="price">Price</label>
        <input
          type="range" 
          id="price"
          min=".25"
          max="100"
          step=".25"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <div>
          <input 
            type="number"
            placeholder={price}
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="bf">
        <span>${solution}</span>
      </div>
    </div>
  );
}