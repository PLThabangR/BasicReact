import React, { useState } from 'react'

const Background = () => {
    let darkModeOn = true
    //Array destruciong syntax
    const [chnageColor,setColor] =useState(false)
     

    const HandleChange = () =>{
        darkModeOn =!darkModeOn
         setColor(darkModeOn)
         if(darkModeOn ==true){
          console.log("background color is blue")
         }else{
          console.log("background color is black")
         }
    }


  return (
    <>
    <div >{chnageColor ?  <h1>Blue mode is on</h1> : <h1>Dark mode is on</h1> }</div>
    {true && 5}
   <button onClick ={HandleChange }>Chnage color</button>
    
    </>
  )
}

export default Background