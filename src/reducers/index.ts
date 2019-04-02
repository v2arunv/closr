import { combineReducers } from 'redux'
import user from './profile'
import feed from "./feed";
import userPhotos from "./userPhotos";

export default combineReducers({
    user: user,
    feed: feed,
    userPhotos: userPhotos,
})