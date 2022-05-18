import { renderEntireTree } from "../render";

let state = {
  postData: [
    {text: 'Hi'},
    {text: 'Hello'},
    {text: 'Do you learn React?'},
  ],
  newPostText: "Defisto",
  dialogsData: [
    { id: 1, name: 'Dima', avatar: 'https://meragor.com/files/styles//220_220_bottom_wm/_diablo-3-logo2_0.jpg' },
    { id: 2, name: 'Artem', avatar: 'https://i.pinimg.com/736x/3f/47/8a/3f478a781ba18a9f4dfc91f9a9364f90.jpg'},
    { id: 3, name: 'Lev', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQ9uFy60WcPrlq0XX5YfKTiFakRbgcPjz89hKxbHSxk5B1FRDkMkf_7iziL6sqKvR-4w&usqp=CAU'},
    { id: 4, name: 'Sasha', avatar: 'https://image.api.playstation.com/cdn/UP0002/BLUS31437_00/Shglr27aLOhxmZATftURqK9bMHQnCvKw.png?w=440&thumb=false' },
    { id: 5, name: 'Valera', avatar: 'https://avatarfiles.alphacoders.com/730/73054.jpg' },
    { id: 6, name: 'Victor', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOB39mVmbw6RZArjGZD13EX9UQ9YKOoe1g6QF5zQtnLSPI_AHQj-zk4vKaTCoJqEJ0kU&usqp=CAU' },
    { id: 7, name: 'Dasha', avatar: 'https://avatarfiles.alphacoders.com/113/113779.jpg' },
  ],
  newMessageData: "Defisto",
  messageData: [
    { message: 'Hi' },
    { message: 'How' },
    { message: 'Are' },
    { message: 'You' },
    { message: 'Yo' },
  ]
}

export let addPost = () => {
  let newPost = {
    id: 5,
    text: state.newPostText,
  }

  state.postData.push(newPost);
  state.newPostText = '';
  renderEntireTree(state);
}

export let updateNewPostText = (newText) => {

  state.newPostText = newText;
  renderEntireTree(state);
}

export let addMessage = () => {
  let newMessage = {
    message: state.newMessageData,
  }

  state.messageData.push(newMessage);
  state.newMessageData = '';
  renderEntireTree(state);
}

export let updateNewMessageText = (newText) => {

  state.newMessageData = newText;
  renderEntireTree(state);
}

export default state