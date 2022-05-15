import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

function Dialogs({dialogs, message}) {
  let dialogElements = dialogs.map((e, i) => <DialogItem key={i} name={e.name} id={e.id} />);

  let messageElements = message.map((e, i) => <Message key={i} message={e.message} />);

  return (
    <div className={s.dialogs}>
      <div>{dialogElements}</div>
      <div>{messageElements}</div>
    </div>
  );
}

export default Dialogs