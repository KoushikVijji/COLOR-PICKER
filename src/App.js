import React, { useState } from 'react';
import './index.css';

function App() {
  const colors = [
    'red', 'greenyellow', 'blue', 'yellow', 'violet', 'aqua', 'orange', 'darkmagenta', 'pink',
    'green', 'indianred', 'aquamarine', 'brown', 'orangered', 'cornflowerblue', 'gold'
  ];

  const [colorBoxesVisible, setColorBoxesVisible] = useState(false);
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('rgb(70, 67, 67)');

  const handleButtonClick = () => {
    setColorBoxesVisible(!colorBoxesVisible);
  };

  const handleColorBoxClick = (color) => {
    setButtonBackgroundColor(color);
  };

  return (
    <div id='container'>
      <h1>Color Picker</h1>
      <div id='colors'>
        {colorBoxesVisible &&
          colors.map((color, index) => (
            <div
              key={index}
              className='color-box'
              style={{ backgroundColor: color }}
              onClick={() => handleColorBoxClick(color)}
            ></div>
          ))}
        <div className="break">
          <button onClick={handleButtonClick}>Pick a color</button>
        </div>
      </div>
      <style>
        {`
          #container #colors button {
            border: none;
            color: white;
            background: ${buttonBackgroundColor};
            font-size: 20px;
            width: 150px;
            height: 50px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default App;
