import { combineReducers } from 'redux'
import user from './profile'
import feed from "./feed";

export default combineReducers({
    user: user,
    feed: feed,
})