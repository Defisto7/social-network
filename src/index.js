import store from './Redux/State'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App 
        dialogs={store._state.messagePage.dialogsData} 
        message={store._state.messagePage.messageData} 
        post={store._state.profilePage.postData}
        dispatch={store.dispatch.bind(store)}
        newPostText={store._state.profilePage.newPostText}
        newMessageData={store._state.messagePage.newMessageData}
        />
    </React.StrictMode>
  );
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree);