import dialogsReducer from "./dialogReducer"
import profileReducer from "./profileReducer"

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST',
  }
}
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT', newText: text
  }
}
export const addMessageActionCreator = () => {
  return {
    type: 'ADD-MESSAGE',
  }
}
export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-MESSAGE', newText: text
  }
}
let store = {
  _state : {
    profilePage: {
      postData: [
        {text: 'Hi'},
        {text: 'Hello'},
        {text: 'Do you learn React?'},
      ],
      newPostText: "Defisto",
    },
    messagePage: {
      dialogsData: [
        { id: 1, name: 'Dima', avatar: 'https://meragor.com/files/styles//220_220_bottom_wm/_diablo-3-logo2_0.jpg' },
        { id: 2, name: 'Artem', avatar: 'https://i.pinimg.com/736x/3f/47/8a/3f478a781ba18a9f4dfc91f9a9364f90.jpg'},
        { id: 3, name: 'Lev', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQ9uFy60WcPrlq0XX5YfKTiFakRbgcPjz89hKxbHSxk5B1FRDkMkf_7iziL6sqKvR-4w&usqp=CAU'},
        { id: 4, name: 'Sasha', avatar: 'https://image.api.playstation.com/cdn/UP0002/BLUS31437_00/Shglr27aLOhxmZATftURqK9bMHQnCvKw.png?w=440&thumb=false' },
        { id: 5, name: 'Valera', avatar: 'https://avatarfiles.alphacoders.com/730/73054.jpg' },
        { id: 6, name: 'Victor', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOB39mVmbw6RZArjGZD13EX9UQ9YKOoe1g6QF5zQtnLSPI_AHQj-zk4vKaTCoJqEJ0kU&usqp=CAU' },
        { id: 7, name: 'Dasha', avatar: 'https://avatarfiles.alphacoders.com/113/113779.jpg' },
      ],
      newMessageData: "Доброго вечора ми з україни",
      messageData: [
        { message: 'Hi' },
        { message: 'How' },
        { message: 'Are' },
        { message: 'You' },
        { message: 'Yo' },
      ]
    }
    },
  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._renderEntireTree = observer;
  },
  _renderEntireTree  () {
  },
  dispatch(action) { 
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.messagePage, action);
    
    this._renderEntireTree();
    
  },
}

export default store