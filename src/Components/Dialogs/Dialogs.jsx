import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/State';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

function Dialogs({dialogs, message, newMessageData, dispatch}) {
  let dialogElements = dialogs.map((e, i) => <DialogItem key={i} name={e.name} id={e.id} avatar={e.avatar}/>);

  let messageElements = message.map((e, i) => <Message key={i} message={e.message} />);

  let newMessageElement = React.createRef();


  let addMessages = () => {
    dispatch(addMessageActionCreator())
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    dispatch(updateNewMessageTextActionCreator(text))
    
  }

  return (
    <div className={s.dialogs}>
      <div>{dialogElements}</div>
      <div>{messageElements}
        <div className={s.textarea}>
          <textarea 
          ref={newMessageElement} rows="2"
          onChange={onMessageChange} 
          value={newMessageData}/>
          <button onClick={addMessages}>Send</button>
        </div>
      </div>
      
    </div>
  );
}

export default Dialogs