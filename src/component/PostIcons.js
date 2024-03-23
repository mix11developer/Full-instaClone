import React from 'react'
import "./css/PostIcons.css"

function PostIcons() {
  const heart = (e) => {
    if (e.target.className === "far fa-heart") {
      e.target.className = "fas fa-heart red"
    } else {
      e.target.className = "far fa-heart"
    }
  }
  const save = (e) => {
    if (e.target.className === "far fa-bookmark") {
      e.target.className = "fas fa-bookmark "
    } else {
      e.target.className = "far fa-bookmark"
    }
  }
  return (
    <div className='PiconCon'>
      <div className='PiconLeft'>
        <div className='whiteHeart' onClick={heart}>
          <i className='far fa-heart'></i>
        </div>
        <div className='redHeart disable' onClick={heart}>
          <i className='fas fa-heart'></i>
        </div>
        <div>
          <i className='far fa-comment'></i>
        </div>
        <div>
          <i className='fas fa-share'></i>
        </div>
      </div>
      <div className='PiconRight'>
        <div className='notSaved' onClick={save}>
          <i className='far fa-bookmark'></i>
        </div>
        <div className='saved disable' onClick={save}>
          <i className='fas fa-bookmark'></i>
        </div>
      </div>
    </div>
  )
}

export default PostIcons