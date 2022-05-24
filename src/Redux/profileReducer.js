let initialState = {
    postData: [
      {text: 'Hi'},
      {text: 'Hello'},
      {text: 'Do you learn React?'},
    ],
    newPostText: "Русский корабль или нах*й",
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD-POST':
      let newPost = {
        id: 5,
        text: state.newPostText
      }
      state.postData.push(newPost);
      state.newPostText = '';
      return state
    case 'UPDATE-NEW-POST-TEXT': 
    state.newPostText = action.newText;
      return state;
    default:
      return state
  }
}

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

export default profileReducer