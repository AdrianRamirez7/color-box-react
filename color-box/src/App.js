import React, { useState } from 'react';
import ColorBox from './components/ColorBox';
import "./App.css"

const App = () => {
  const [boxCount, setBoxCount] = useState(0);

  const addBox = () => {
    setBoxCount(boxCount + 1);
  };

  const removeBox = () => {
    if (boxCount > 0) {
      setBoxCount(boxCount - 1);
    }
  };
  
  //creates new box component
  const boxes = [];
  for (let i = 0; i < boxCount; i++) {
    boxes.push(<ColorBox key={i} />);
  }



  return (
    <div>
      <button onClick={addBox}>Add Box</button>
      <button onClick={removeBox}>Remove Box</button>
      {boxes}
      <ColorBox />
    </div>
  );
};

export default App;
