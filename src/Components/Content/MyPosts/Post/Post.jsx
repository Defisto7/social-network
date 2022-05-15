import React from 'react';
import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.item}>
      <img
        className={s.ava}
        src="https://yt3.ggpht.com/ytc/AKedOLT0RiSDYzEFjKuFdUoYCVhOXKR1u8Z-ho5nQb2nLw=s900-c-k-c0x00ffffff-no-rj"
        alt=""
      />
      <div className={s.text}>{props.text}</div>
    </div>
  );
}

export default Post;
