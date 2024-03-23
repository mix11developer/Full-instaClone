import React from 'react'
import "./css/PostComment.css"
import Oj from './Oj'
import ReactPortal from './ReactPortal'

function PostComment() {
  const [emojiShown, setEmojiShown] = React.useState(false)
  const handle = (e) => {
    setEmojiShown(!emojiShown)
    console.log(e)
  }
  
  return (
    <div className='postComment'>
      <div className='emoji' onClick={handle}>
        <i className='far fa-grin-alt'></i>
      </div>
      {emojiShown && <ReactPortal wrapperId="emoji">
        <Oj></Oj>
      </ReactPortal>}
      <div className='emojiPicker'>
      </div>
      <div className='commentTxt'>
        <input type="text" id="ncID" placeholder='Add a comment...' />
      </div>
      <div className='commentSender'>Post</div>
    </div>
  )
}

export default PostComment