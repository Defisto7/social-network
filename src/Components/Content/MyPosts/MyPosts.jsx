import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts({post}) {
  let postElements = post.map((e, i) => <Post key={i} text={e.text}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
  }
  return (
    <div>
      <div className={s.textArea}>
        <textarea ref={newPostElement} cols="40" rows="2"></textarea>
        <button onClick={ addPost } className={s.btn}>Add post</button>
      </div>
      {postElements}
    </div>
  )
}

export default MyPosts