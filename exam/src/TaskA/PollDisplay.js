import React from 'react'

export default function PollDisplay({voteCount}) {

  const pollObject = {

    "question": "What is your favorite programming language?",
  
    "choices": [
  
      { "id": 1, "label": "JavaScript", "votes": 0 },
  
      { "id": 2, "label": "Python", "votes": 0 },
  
      { "id": 3, "label": "Java", "votes": 0 },
  
      { "id": 4, "label": "C#", "votes": 0 }
    ]
}

    

   

  return (
    <div>

        

         <h1>{pollObject.question}</h1>


         
         {pollObject.choices.map((choice)=>(
            <>

            <label>{choice.label}  : {choice.votes} </label>
            <br></br>
            </>
              
         ))}
        

        
         

    </div>
  )
}
