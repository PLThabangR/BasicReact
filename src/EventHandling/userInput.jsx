import React, { useState } from 'react'

const UserInput = () => {
    const [inputText,setInputText] = useState("Hello")

  const handleChange = (e)=>{
    setInputText(e.target.value)
    console.log(inputText)
  }
  
    return (
    <div>userInput

    <input value ={inputText} onChange={handleChange} placeholder='Enter a nema'/>

    </div>
  )
}

export default UserInput