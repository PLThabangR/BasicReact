import React, { useState } from 'react'

const Background = () => {
    let darkModeOn = true
    //Array destruciong syntax
    const [chnageColor,setColor] =useState(false)
    const blue = <h1>Blue mode is on</h1>
    const black = <h1>Dark mode is on</h1>

    const HandleChange = () =>{
         darkModeOn = !darkModeOn
         if(darkModeOn ==true){
          console.log("background color is blue")
         }else{
          console.log("background color is black")
         }
    }


  return (
    <>
    <div>{darkModeOn ? blue : black}</div>
   <button onClick ={HandleChange }>Chnage color</button>
    
    </>
  )
}

export default Background