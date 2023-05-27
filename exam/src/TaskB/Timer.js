import React from 'react'

export default function Timer({counter,setCounter}) {
  
  var intervalId = setInterval(()=>{
    setCounter(counter-1)

    if (counter < 0) {
        clearInterval(intervalId);
        
      }
  },1000)
  
  
  const message = "Time's Up"

 

return (
    <div>
      <h1>{counter>0?`timer:${counter}`:message}</h1>
    </div>
  )
}
