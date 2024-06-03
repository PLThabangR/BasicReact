import React from 'react'
//import ReactPlayer from "react-player";
//If video comes from youtube
import ReactPlayer from "react-player";


const MyVideo = () => {
    return (
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    );
  }

const Media = () => {
  return (
    <div>Video Player
        <MyVideo/>


    </div>
  )
}

export default Media