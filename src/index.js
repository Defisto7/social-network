import state, { subscribe } from './Redux/State'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost, updateNewPostText, addMessage, updateNewMessageText } from './Redux/State'


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App 
        dialogs={state.dialogsData} 
        message={state.messageData} 
        post={state.postData}
        addPost={addPost}
        newPostText={state.newPostText}
        updateNewPostText={updateNewPostText}
        newMessageData={state.newMessageData}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}/>
    </React.StrictMode>
  );
}

renderEntireTree(state)

subscribe(renderEntireTree);