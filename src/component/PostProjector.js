import React from 'react'
import "./css/PostProjector.css"
import ImagePlayer from "./ImagePlayer"
import VideoPlayer from "./VideoPlayer"


function PostProjector(props) {
  return (
    <div className='postProjector'>
      {
        props.type === "image"
          ?
          (<ImagePlayer data={props}></ImagePlayer>)
          :
          (<VideoPlayer data={props}></VideoPlayer>)
      }
    </div>
  )
}

export default PostProjector