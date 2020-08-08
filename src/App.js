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
  const bf = calculateBoardFeet(width, length, thickness);
  const amount = bf * price

  return (
    <div className="App">
      <div className="container">
        <div className="input">
          <label for="price" className="input-label">Price:</label>
          <input
            className="input-value"
            type="number"
            placeholder={price}
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div className="input">
            <label for="width" className="input-label">Width:</label>
            <input
              className="input-value"
              type="number"
              placeholder={width}
              value={width}
              onChange={e => setWidth(e.target.value)}
            />
        </div>
        <div className="input">
          <label for="length" className="input-label">Length:</label>
          <input
          className="input-value"
            type="number"
            placeholder={length}
            value={length}
            onChange={e => setLength(e.target.value)}
          />
        </div>
        <div className="input">
          <label for="thickness" className="input-label">Thickness:</label>
          <select className="input-value" id="thickness" value={thickness} onChange={e => setThickness(e.target.value)}>
            <option value=".50">1/2</option>
            <option value=".75">3/4</option>
            <option value="1">4/4</option>
            <option value="1.25">5/4</option>
            <option value="1.50">6/4</option>
            <option value="2">8/4</option>
          </select>
        </div>
        <div className="solution">
          <div>
            <span>{bf} BF</span>
          </div>
          <div>
            <span>${amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}