import React from 'react'
import "./css/PostHeader.css"

function PostHeader(props) {
  var names = []
  const Handle = (e) => {
    console.log("1")

  }
  if (props.posterNames.length === 2) {
    props.posterNames && props.posterNames.map((name, i) => {
      names.push((<a href={"www.mubam.com/" + name.id} key={name.id.toString()}>{name.name}</a>))
      return null
    })
    var finalName = (
      <>
        {
          names && names.map((name, i) => {
            if (i === 0) {
              return name
            } else {
              return (
                <>
                  <span> and </span>
                  {name}
                </>
              )
            }
          })
        }
      </>
    )
  } else if (props.posterNames.length === 1) {
    finalName = (
      <a href={"www.mubam.com/" + props.posterNames[0].id}>{props.posterNames[0].name}</a>
    )
  } else if (props.posterNames.length > 2) {
    finalName = (
      <>
        <a href={"www.mubam.com/" + props.posterNames[0].id}>{props.posterNames[0].name}</a>
        <span> and </span>
        <span meta-data={props.posterNames[0].id} onClick={Handle} id="tagsLoader">OTHER</span>
      </>
    )
  }
  return (
    <div className='postHeader' key={props.id} data-pid={props.id}>
      <div className='posterImage'>
        <img src={props.image} alt="avatar" />
      </div>
      <div className='posterName '>
        {finalName}
      </div>
      <div className='posterIcon'>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  )
}

export default PostHeader