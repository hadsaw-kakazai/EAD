import React from 'react'

export default function Timer({counter,setCounter}) {
  
  var intervalId = null
  
  var timerFunction = function(){
    if(counter>0)
    {
        setCounter(counter-1)
    }
    else{
        clearInterval(intervalId)
    }

  }
  const message = "Time's Up"

 

return (
    <div>
      <h1>{function(){intervalId = setInterval(timerFunction,1000)}}</h1>
    </div>
  )
}
