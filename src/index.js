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
        dispatch={store.dispatch.bind(store)}
        newPostText={store._state.newPostText}
        newMessageData={store._state.newMessageData}
        />
    </React.StrictMode>
  );
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree);