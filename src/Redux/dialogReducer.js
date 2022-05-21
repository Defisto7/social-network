const dialogsReducer = (state, action) => {
  switch(action.type) {
    case 'ADD-MESSAGE':
      let newMessage = {
        message: state.newMessageData,
      }
      state.messageData.push(newMessage);
      state.newMessageData = '';
      return state
    case 'UPDATE-NEW-MESSAGE': 
    state.newMessageData = action.newText;
      return state;
    default:
      return state
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

export default dialogsReducer