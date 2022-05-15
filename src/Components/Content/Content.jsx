import React from 'react';
import './Content.css'
import MyPosts from './MyPosts/MyPosts';

function Content({post}) {
  return (
    <div>
      <MyPosts post={post}/>
    </div>
  )
}

export default Content