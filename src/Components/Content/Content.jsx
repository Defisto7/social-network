import React from 'react';
import './Content.css'
import MyPosts from './MyPosts/MyPosts';

function Content({post, newPostText, dispatch}) {
  return (
    <div>
      <MyPosts post={post} dispatch={dispatch} newPostText={newPostText}/>
    </div>
  )
}

export default Content