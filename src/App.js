import React, { useState } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import LogRocket from 'logrocket';

LogRocket.init('bz2adh/board-foot-calculator');

//Google Analytics
ReactGA.initialize('UA-121099504-1');
ReactGA.pageview(Location.pathname);

//get board feet from api with board length and board width and board thickness
const getBoardFeet = async (width,length, thickness) => {
  const apiUrl = `https://pkm3vqx465.execute-api.us-east-1.amazonaws.com/test/bfc`;
  
  //build json object to send to api
  const data = {
    "board_width": width,
    "board_length": length,
    "board_thickness": thickness
  }
  //send json object to api
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(data)
  });
  //get response from api
  const json = await response.json();
  //return response
  console.log(json);
  return json;
}; 

export default function App() {
  const [width, setWidth] = useState(6);
  const [length, setLength] = useState(8);
  const [thickness, setThickness] = useState(4/4);
  const [price, setPrice] = useState();
  let boardFeet = getBoardFeet(width,length,thickness).body;
  let amount = ((boardFeet * price) || 0).toFixed(2);

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
          <div className="input">
            <div>
              <label>Thickness</label>
            </div>
            <div>
              <select value={thickness} onChange={e => setThickness(e.target.value)}>
                <option value="1">4/4</option>
                <option value="1.25">5/4</option>
                <option value="1.5">6/4</option>
                <option value="2">8/4</option>
                <option value="3">12/4</option>
              </select>
            </div>
          </div>
        </div>
        <div className="totals-container">
          ${amount}
        </div>
      </div>
    </div>
  );
}