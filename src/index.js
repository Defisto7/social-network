import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let postData = [
  {text: 'Hi'},
  {text: 'Hello'},
  {text: 'Do you learn React?'},
]
let dialogsData = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Artem' },
  { id: 3, name: 'Lev' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Valera' },
  { id: 6, name: 'Victor' },
  { id: 7, name: 'Dasha' },
];
let messageData = [
  { message: 'Hi' },
  { message: 'How' },
  { message: 'Are' },
  { message: 'You' },
  { message: 'Yo' },
];

root.render(
  <React.StrictMode>
    <App dialogs={dialogsData} message={messageData} post={postData}/>
  </React.StrictMode>
);
