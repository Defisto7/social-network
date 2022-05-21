import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/State';
import s from './MyPosts.module.css'
import Post from './Post/Post';


function MyPosts({post, newPostText, dispatch}) {
  let postElements = post.map((e, i) => <Post key={i} text={e.text}/>);
  let newPostElement = React.createRef();

  let addPosts = () => {
    dispatch(addPostActionCreator())
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    dispatch(updateNewPostTextActionCreator(text))
  }
  
  return (
    <div>
      <div className={s.textArea}>
        <textarea cols="40" rows="2" 
          onChange={onPostChange} 
          ref={newPostElement} 
          value={newPostText} />
        <button onClick={ addPosts } className={s.btn}>Add post</button>
      </div>
      {postElements}
    </div>
  )
}

export default MyPosts