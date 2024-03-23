import React from 'react'
import "./css/Body.css"
import Post from './Post'
import Story from './Story'

function Body() {
  var data = require("../data/finalPosts.json").slice(0, 10)
  var final = data && data.map((post) => {
    return (
      <Post data={post} key={post.postID}></Post>
    )
  })
  return (
    <div className='body'>
      <Story></Story>
      {final}
      {/* <Post></Post> */}
      {/* <Post></Post> */}
      {/* <Post></Post> */}
    </div>
  )
}

export default Body