import React, { useState } from 'react'
import TankyouComponet from './TankyouComponet'

import AnotherUserParticipant from './AnotherUserParticipant'
export default function UserParticipant({selection,setSelection,voteCount,setVoteCount}) {

    const [submit,setSubmit] = useState(false)
    const pollObject = {

        "question": "What is your favorite programming language?",
      
        "choices": [
      
          { "id": 1, "label": "JavaScript", "votes": 0 },
      
          { "id": 2, "label": "Python", "votes": 0 },
      
          { "id": 3, "label": "Java", "votes": 0 },
      
          { "id": 4, "label": "C#", "votes": 0 }
        ]
    }

    
    
    function handleChange(event)
    {
        const {name , value} = event.target
        setSelection((prev)=>{return {
            ...prev,
            [name]:value}})
        
       if(value === pollObject.choices[0].label){
            setVoteCount((prev)=>{return {...prev,"choice1":voteCount.choice1+1}})
            pollObject.choices[0].votes = voteCount.choice1
       }   
       
        else  if(value === pollObject.choices[1].label){
        setVoteCount((prev)=>{return {...prev,"choice2":voteCount.choice2+1}})
        pollObject.choices[1].votes = voteCount.choice2
        }   

   else if(value === pollObject.choices[2].label){
    setVoteCount((prev)=>{return {...prev,"choice3":voteCount.choice3+1}})
    pollObject.choices[2].votes = voteCount.choice3
}   

    if(value === pollObject.choices[3].label){
    setVoteCount((prev)=>{return {...prev,"choice4":voteCount.choice4+1}})
    pollObject.choices[3].votes = voteCount.choice4
    
    }   
       console.log(voteCount)
       console.log(pollObject)

    }

   
 
  return (
    <div>
    
    {submit?<><TankyouComponet/><AnotherUserParticipant/></>:<>
               <fieldset>
               {pollObject.choices.map((choice)=>(
                  <>
      
                  <input type='radio' name={"selection"} value={choice.label} checked={selection.selection===choice.label} onChange={(event)=>{handleChange(event)}}/> 
                  <label>{choice.label}</label>
                  <br></br>
                  </>
                    
               ))}
               </fieldset>
      
              
              <button onClick={()=>setSubmit(!submit)}>Submit Poll</button>
    
              </>
    }



    </div>
  )
}
