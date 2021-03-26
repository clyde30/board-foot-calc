import React from 'react';

const Thickness = ( props ) => {

    function updateThickness(e) {
        props.onChange(e.target.value);
    }

    return (
        <div className="input">
            <div>
                <label>Thickness</label>
            </div>
            <div>
                <select value={props.thickness} onChange={updateThickness}>
                    <option value="1">4/4</option>
                    <option value="1.25">5/4</option>
                    <option value="1.5">6/4</option>
                    <option value="2">8/4</option>
                    <option value="3">12/4</option>
                </select>
            </div>
        </div>
    );
};

export default Thickness;