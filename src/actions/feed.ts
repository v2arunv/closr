import {IPost} from "../models/posts";
import {IUser} from "../models/users";
import {IComment} from "../models/comments";

export interface IFeedAction {
    type:
        'GET_POSTS_INIT'
        | 'GET_POSTS_SUCCESS'
        | 'GET_POSTS_ERROR'
    posts?: Array<IPost>,
    users?: Array<IUser>,
    comments?: Array<IComment>,
}

export const getPosts = (): IFeedAction => {
    return {
        type: "GET_POSTS_INIT",
    }
};