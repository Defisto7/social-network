import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

function Dialogs({dialogs, message}) {
  let dialogElements = dialogs.map((e, i) => <DialogItem key={i} name={e.name} id={e.id} avatar={e.avatar}/>);

  let messageElements = message.map((e, i) => <Message key={i} message={e.message} />);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text)
  }

  return (
    <div className={s.dialogs}>
      <div>{dialogElements}</div>
      <div>{messageElements}
        <div className={s.textarea}>
          <textarea ref={newMessageElement} cols="40" rows="2"></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
      
    </div>
  );
}

export default Dialogs