import {IPost} from "../models/posts";
import {IUser} from "../models/users";

export interface IFeedAction {
    type:
        'GET_POSTS_INIT'
        | 'GET_POSTS_SUCCESS'
        | 'GET_POSTS_ERROR'
        | 'GET_USERS_INIT'
        | 'GET_USERS_SUCCESS'
        | 'GET_USERS_ERROR',
    posts?: Array<IPost>,
    users?: Array<IUser>
}

export const getPosts = (): IFeedAction => {
    return {
        type: "GET_POSTS_INIT",
    }
};