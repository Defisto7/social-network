import store from './Redux/reduxStore'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        dialogs={state.messagePage.dialogsData} 
        message={state.messagePage.messageData}
        newMessageData={state.messagePage.newMessageData} 
        post={state.profilePage.postData}
        newPostText={state.profilePage.newPostText}
        dispatch={store.dispatch.bind(store)}
        />
    </React.StrictMode>
  );
}

renderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  renderEntireTree(state)
});