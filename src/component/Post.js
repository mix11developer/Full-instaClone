import React from 'react'
import "./css/Post.css"
import PostHeader from './PostHeader'
import PostProjector from './PostProjector'
import PostIcons from './PostIcons'
import PostSpan from './PostSpan'
import PostComment from './PostComment'


function Post(props) {

  return (
    <div className='post' key={props.data.postID} data-pid={props.data.postID}>
      <PostHeader
        id={props.data.peostID}
        posterNames={props.data.posterNames}
        image={"https://picsum.photos/201/31" + props.data.postID}
      />
      <PostProjector
        type="image"
        mediaFiles={props.data.mediaFiles}
        postID={props.data.postID}
      />
      <PostIcons />
      <PostSpan
        posterName={props.data.posterNames[0].name}
        commentNumber={props.data.commentNumber}
        likeNumber={props.data.likeNumber}
        description={props.data.description}
        date={props.data.date}
        postID={props.data.postID}
      />
      <PostComment />
    </div>
  )
}

export default Post