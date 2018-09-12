import React from 'react'

const Post = (props) => (
  <div><p>Title: {props.title}<br/>
  Date: {(new Date(props.created*1000)).toDateString()}<br/>
  Time: {(new Date(props.created*1000)).toTimeString()}<br/>
  Summary: {props.selftext}</p></div>

)



export default Post
