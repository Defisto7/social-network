import React from 'react';
import './Content.css'
import MyPosts from './MyPosts/MyPosts';

function Content({post, addPost, newPostText, updateNewPostText}) {
  return (
    <div>
      <MyPosts post={post} addPost={addPost} newPostText={newPostText} updateNewPostText={updateNewPostText}/>
    </div>
  )
}

export default Content