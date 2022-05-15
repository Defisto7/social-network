import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from './Redux/State'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App 
      dialogs={state.dialogsData} 
      message={state.messageData} 
      post={state.postData}/>
  </React.StrictMode>
);
