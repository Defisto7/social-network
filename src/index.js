import store from './Redux/State'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App 
        dialogs={store._state.dialogsData} 
        message={store._state.messageData} 
        post={store._state.postData}
        addPost={store.addPost.bind(store)}
        newPostText={store._state.newPostText}
        updateNewPostText={store.updateNewPostText.bind(store)}
        newMessageData={store._state.newMessageData}
        addMessage={store.addMessage.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}/>
    </React.StrictMode>
  );
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree);