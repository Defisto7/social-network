import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


function Dialogs(probs) {
  return (
    <div className={s.dialogs}>
      <div>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Artem" id="2" />
        <DialogItem name="Sasha" id="3" />
        <DialogItem name="Lev" id="4" />
        <DialogItem name="Victor" id="5" />
        <DialogItem name="Valera" id="6" />
      </div>
      <div>
        <Message message='Hi' />
        <Message message='How are yoy?' />
      </div>
    </div>
  );
}

export default Dialogs