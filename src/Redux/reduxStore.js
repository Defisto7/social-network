import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
});

let store = createStore(reducers);

export default store