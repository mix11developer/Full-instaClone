import React from 'react'
import "./css/PostSpan.css"

function PostSpan(props) {
  const id = props.postID
  window.setTimeout(() => {
    if (document.querySelector(`[data-pid="${id}"]`).querySelector(".descTxt").offsetHeight / 22.4 > 2.5) {
      document.querySelector(`[data-pid="${id}"]`).querySelector(".more").style.display = "block"
      document.querySelector(`[data-pid="${id}"]`).querySelector(".descTxt").style.setProperty("--max-line", "2")
    }
  }, 100)

  const more = (e) => {
    document.querySelector(`[data-pid="${id}"]`).querySelector(".descTxt").style.setProperty("--max-line", "200")
    document.querySelector(`[data-pid="${props.postID}"]`).querySelector(".more").style.display = "none"
  }
  // console.log(new Date().getDate() - new Date("2022-11-1 00:06:25").getDate() > 7)
  const dateHandle = (myDate) => {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; var date = new Date(myDate)
    if (date.getFullYear() !== new Date().getFullYear()) {
      return months[date.getUTCMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    } else if (date.getMonth() + 1 !== new Date().getMonth() + 1) {
      return months[date.getMonth()] + " " + date.getDate()
    } else if (new Date().getDate() - date.getDate() > 7) {
      return months[date.getMonth()] + " " + date.getDate()
    } else if (new Date().getDate() - date.getDate() <= 7) {
      if (new Date().getDate() - date.getDate() === 0) {
        if (date.getHours() === new Date().getHours()) {
          return (new Date().getMinutes() - date.getMinutes()) + " MINUTE AGO"
        } else if (new Date().getHours() - date.getHours() === 1 && new Date().getMinutes() + 60 - date.getMinutes() < 60) {
          const min = new Date().getMinutes() + 60 - date.getMinutes()
          return min + " MINUTE AGO"
        }

        return (new Date().getHours() - date.getHours()) + " HOURS AGO"
      }
      return (new Date().getDate() - date.getDate()) + " DAY AGO"
    }
  }
  return (
    <div className='span'>
      <div className='likeNum'>
        <img src={require('../component/image/hacker.jpeg')} alt="Musab AlHussein" />
        <span className='likeTxt'>
          &nbsp;Liked by <span className='likeName'>Mix11</span> and {props.likeNumber} others
        </span>
      </div>
      <div className='desc'>
        <span className='SpN'>
          {props.posterName} &nbsp;
        </span>
        <div className='descTxt'>
          {props.description}
        </div>
        <span className='more' onClick={more}>See More...</span>
      </div>
      <div className='commentNum'>
        View All {props.commentNumber} Comment
      </div>
      <div className='date'>
        {dateHandle(props.date)}
      </div>
    </div>
  )
}

export default PostSpan