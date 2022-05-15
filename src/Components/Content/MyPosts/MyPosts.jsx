import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {
  return (
    <div>
      <div className={s.textArea}>
        <textarea name="" id="" cols="40" rows="2"></textarea>
        <button className={s.btn}>Add post</button>
      </div>
      <Post text="Hi"/>
      <Post text="Yo"/>
      <Post text="Good morning"/>
    </div>
  )
}

export default MyPosts