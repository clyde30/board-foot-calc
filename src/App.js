import React, { useState } from 'react';
import Thickness from './Thickness';
import './App.css';

function calculateBoardFeet(width, length, thickness) {
  return ((width * length * thickness)/12);
}


export default function App() {
  const [width, setWidth] = useState();
  const [length, setLength] = useState();
  const [thickness, setThickness] = useState();
  const [price, setPrice] = useState();
  const bf = calculateBoardFeet(width, length, thickness);
  let amount = ((bf * price) || 0).toFixed(2);
  
  function updateThickness(newThickness){
    setThickness(newThickness);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Board Foot Calculator</h1>
      </div>
      <div className="container">
        <div className="inputs-container">
          <div className="input">
            <div>
              <label>Price per board foot</label>
            </div>
            <div>
              <input type="number" placeholder="$" value={price} onChange={e => setPrice(e.target.value)}/>
            </div>
          </div>
          <div className="input">
            <div>
              <label>Length(ft)</label>
            </div>
            <div>
              <select value={length} onChange={e => setLength(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
              </select>
            </div>
          </div>
          <div className="input">
            <div>
              <label>Width(in)</label>
            </div>
            <div>
              <select value={width} onChange={e => setWidth(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
              </select>
            </div>
          </div>
        <Thickness thickness={thickness} onChange={updateThickness} />
        </div>
        <div className="totals-container">
          ${amount}
        </div>
      </div>
    </div>
  );
}