import {IPost} from "@models/posts";
import {IFeedAction} from "@actions/feed";
import {IUser} from "@models/users";
import {IComment} from "@models/comments";
import _ from 'lodash';

export interface IFeedState {
    isLoading: boolean,
    isError: boolean,
    posts: Array<IPost>,
    users: any,
    comments: any,
}

const initialState = {
    isLoading: true,
    isError: false,
    posts: [],
    users: {},
    comments: [],
};

const convertUserArrayPayloadIntoLookupMap = (users: Array<IUser> = [], initialState: any) => {
    // Create a map of { userId: userDetails } to avoid iterating through
    // an array to lookup user info
    return _.reduce(users, (acc: any, val: IUser) => {
        return {
            ...acc,
            [val.id]: val,
        };
    }, initialState)
};

const convertCommentsArrayPayloadIntoLookupMap = (comments: Array<IComment> = [], initialState: any) => {
    const copy = Object.assign({}, initialState);
    return _.reduce(comments, (acc: any, val: IComment) => {
        if (acc[val.postId] == null) {
            acc[val.postId] = [val]
        } else {
            acc[val.postId].push(val);
        }
        return acc;
    }, copy)
};

const feed = (state = initialState, action: IFeedAction): IFeedState => {
    switch (action.type) {
        case 'GET_POSTS_INIT':
            return {
                ...state,
                isLoading: true,
            };
        case 'GET_POSTS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                posts: action.posts || [],
                users: convertUserArrayPayloadIntoLookupMap(action.users, state.users),
                comments: convertCommentsArrayPayloadIntoLookupMap(action.comments, state.comments)
            };
        case 'GET_POSTS_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true,
                posts: [],
            };
        case 'RESET_FEED_STATE': {
            return initialState;
        }
        default:
            return state
    }
};

export default feed;