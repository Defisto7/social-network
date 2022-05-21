const profileReducer = (state, action) => {
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

export default profileReducer