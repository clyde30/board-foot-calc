const Input = (props) => {
    const inputType = props.name;
    console.log(inputType);
    
    if (props.name === "price") {
        return (
            <input type={props.type} placeholder={props.placeholder}></input>
        )
    }

    if (props.name === "length") {
        return (
            <select>
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
        )
    }   

    if (props.name === "width") {
        return (
            <select>
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
        )
    }   

    if (inputType === "thickness") {
        return (
            <select>
                <option value="1">4/4</option>
                <option value="1.25">5/4</option>
                <option value="1.5">6/4</option>
                <option value="2">8/4</option>
                <option value="3">12/4</option>
            </select>
        )
    }
}
export default Input;