import { combineReducers } from 'redux'
import todo from "./todo";
import user from './profile'

export default combineReducers({
    todo: todo,
    user: user,
})