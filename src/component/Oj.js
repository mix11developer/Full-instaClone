import React from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
// import Emoji  from 'emoji-mart'

function Oj() {
  const handle = () => { }
  return (
    <div className='emojiCon'>
      <Picker data={data} theme='dark' onEmojiSelect={handle} />
      <div className='emojisHolder'>

      </div>
    </div>
  )
}

export default Oj