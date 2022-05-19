import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts({post, newPostText, dispatch}) {
  let postElements = post.map((e, i) => <Post key={i} text={e.text}/>);
  let newPostElement = React.createRef();

  let addPosts = () => {
    let text = newPostElement.current.value;
    dispatch({ type: 'ADD-POST', newText: text})
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text})
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