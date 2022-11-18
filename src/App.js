import React, {useState} from 'react';
import Bottom from "./components/Bottom";
import Middle from "./components/Middle";
import Top from "./components/Top";
import './App.css';

const App = () => {
  const [vCount, setVCount] = useState(0);
  const [xCount, setXCount] = useState(0);
  const [index, setIndex] = useState(0);

  return (
    <div className="container">
      <Top vCount={vCount} xCount={xCount} />
      <Middle index={index} vCount={vCount} xCount={xCount} />
      <Bottom setVCount={setVCount} setXCount={setXCount} setIndex={setIndex} vCount={vCount} xCount={xCount} />
    </div>
  )
}

export default App;