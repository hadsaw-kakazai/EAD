import logo from './logo.svg';
import './App.css';
import Timer from './TaskB/Timer';
import { useState } from 'react';
import PollDisplay from './TaskA/PollDisplay';
import UserParticipant from './TaskA/UserParticipant';
import AnotherUserParticipant from './TaskA/AnotherUserParticipant';
function App() {
  
  const [counter,setCounter] = useState(10)
  const [selection,setSelection] = useState({
    'selection' : ""
  })
  const [voteCount,setVoteCount] = useState({
    choice1:0,
    choice2:0,
    choice3:0,
    choice4:0,
    
  })
  
  return (
   <>
    
    <h1>Polling App</h1>
    <PollDisplay voteCount={voteCount}/>
    <UserParticipant selection={selection} setSelection={setSelection} voteCount={voteCount} setVoteCount={setVoteCount}/>
    

    {/* <Timer counter={counter} setCounter={setCounter}/> */}
   </>
  );
}

export default App;
