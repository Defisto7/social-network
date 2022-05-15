import React from 'react';
import s from './Message.module.css';

function Message({message}) {
  return (
    <div>
      <div className={s.message}>{message}</div>
    </div>
  )
}

export default Message