import React from 'react'
import "./css/Story.css"
import StoryAvatar from "./StoryAvatar"
const story = require("../data/story.json")
// const users = require("../data/users.json")


function Story() {
  var [group, setGroup] = React.useState(10)
  var amount
  if (group === 10) {
    amount = 0
  } else {
    amount = group / 10 - 1
  }
  const handle = (e) => {
    const f = document.querySelector(".avatarCon")
    if (f.scrollLeft > 0) {
      document.querySelector(".befor").style.display = "block"
    }
    if (f.scrollLeft === 0) {
      document.querySelector(".befor").style.display = "none"
    }
    if (f.scrollLeft >= (400 + amount * 900)) {
      document.querySelector(".after").style.display = "none"
      setTimeout(() => {
        setGroup(
          group = group + 10
        )
        document.querySelector(".after").style.display = "block"

      }, 1000);
    } else {
      document.querySelector(".after").style.display = "block"
    }
  }
  const after = () => {
    const f = document.querySelector(".avatarCon")
    f.scrollLeft += 400
    if (f.scrollLeft > 0) {
      document.querySelector(".befor").style.display = "block"
    }
  }
  const befor = (e) => {
    const f = document.querySelector(".avatarCon")
    f.scrollLeft -= 400
    if (f.scrollLeft === 0) {
      document.querySelector(".befor").style.display = "none"
    }
  }
  // console.table(story.slice(0, 10))
  React.useEffect(() => {

  }, )
  var unShown = []
  var shown = []
  story.slice(0, group) && story.slice(0, group).map((image) => {
    image.isShown ? unShown.push(image) : shown.push(image)
    return null
  })
  const finalStories = (
    <>
      {unShown && unShown.map((image) => {
        return (
          <StoryAvatar isshown={image.isShown} key={image.sotryId} name="musab" image={image.meidaFile} />
        )
      })}
      {shown && shown.map((image) => {
        return (
          <StoryAvatar isshown={image.isShown} key={image.sotryId} name="musab" image={image.meidaFile} />
        )
      })}
    </>
  )
  return (
    <div className='sty' >
      <div className="befor arrow" onClick={befor}>
        <i className='fas fa-chevron-circle-left'></i>
      </div>
      <div className='storyContainer'>
        <div className='avatarCon' onScroll={handle}>
          {finalStories}
        </div>
      </div>
      <div className='after arrow' onClick={after}>
        <i className='fas fa-chevron-circle-right'></i>
      </div>
    </div>
  )
}

export default Story