import {IPost} from "../models/posts";
import {IUser} from "../models/users";
import {IComment} from "../models/comments";

export interface IFeedAction {
    type:
        'GET_POSTS_INIT'
        | 'GET_POSTS_SUCCESS'
        | 'GET_POSTS_ERROR'
        | 'RESET_FEED_STATE'
    posts?: Array<IPost>,
    users?: Array<IUser>,
    comments?: Array<IComment>,
}

export const getPosts = (): IFeedAction => {
    return {
        type: "GET_POSTS_INIT",
    }
};

export const resetState = (): IFeedAction => {
    return {
        type: 'RESET_FEED_STATE'
    }
}