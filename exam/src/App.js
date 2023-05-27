import logo from './logo.svg';
import './App.css';
import Timer from './TaskB/Timer';
import { useState } from 'react';
import PollDisplay from './TaskA/PollDisplay';
function App() {
  
  const [counter,setCounter] = useState(10)
  return (
   <>
    
    <h1>Polling App</h1>
    <PollDisplay/>

    {/* <Timer counter={counter} setCounter={setCounter}/> */}
   </>
  );
}

export default App;
