import React from 'react'
import "./css/StoryAvatar.css"


function StoryAvatar(props) {
  const style = { transform: `translateX(${props.index * 20}px)` }
  // console.log(props)
  return (
    <div style={style} className='avatarContainer' key={props.index}>
      <img src={props.image} alt="avatar" className='image'
        style={props.isshown ? { outline: "2px solid red" } : { outline: "none" }}
      />
      <div className='name'>
        {props.name}
      </div>
    </div>
  )
}

export default StoryAvatar