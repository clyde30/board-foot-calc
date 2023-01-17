import { useEffect, useState } from "react";

interface UserInput {
    price: number;
    length: number;
    width: number;
    thickness: number;
}

function Calculator() {
    const [price, setPrice] = useState(0);
    const [length, setLength] = useState(1);
    const [width, setWidth] = useState(1);
    const [thickness, setThickness] = useState(4/4);
    const [cost, setCost] = useState(0);


    useEffect(() => {
        let boardFoot = (length * width * thickness) / 12;
        setCost(parseFloat((price * boardFoot).toFixed(2)));
    }, [price, length, width, thickness]);

    return (
        <div className='w-96'>
          <div className='container bg-orange-300 pt-6 px-6 rounded-t-lg shadow-2xl'>
            <div className='flex flex-col'>
              <div className="mb-4 flex flex-col">
                <label htmlFor="price">Price / BF</label>
                <input className='rounded p-3 bg-white' value={price} onChange={e => setPrice(parseFloat(e.target.value))} type="number" name="price" id="price" placeholder='$'/>
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="length">Length(ft)</label>
                <select className='rounded p-3 bg-white' value={length} onChange={e => setLength(parseInt(e.target.value))} name="length" id="length">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="width">Width(in)</label>
                <select className='rounded p-3 bg-white' value={width} onChange={e => setWidth(parseInt(e.target.value))} name="width" id="width">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                </select>
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="thickness">Thickness(in)</label>
                <select className='rounded p-3 bg-white' value={thickness} onChange={e => setThickness(parseFloat(e.target.value))} name="thickness" id="thickness">
                  <option value="1">4/4</option>
                  <option value="1.25">5/4</option>
                  <option value="1.5">6/4</option>
                  <option value="2">8/4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-black text-white text-center py-4 rounded-b-lg">${cost}</div>
        </div>
    )
}

export default Calculator