import {IPost} from "../models/posts";
import {IFeedAction} from "../actions/feed";

export interface IFeedState {
    isLoading: boolean,
    isError: boolean,
    posts: Array<IPost> | null,
    users: {},
}

const initialState = {
    isLoading: true,
    isError: false,
    posts: [],
    users: {},
};

const feed = (state = initialState, action: IFeedAction): IFeedState => {
    switch (action.type) {
        case 'GET_POSTS_INIT':
            console.log('init feed');
            return {
                ...state,
                isLoading: true,
            };
        case 'GET_POSTS_SUCCESS':
            console.log('feed success', action.posts);
            return {
                ...state,
                isLoading: false,
                posts: action.posts || [],
            };
        case 'GET_POSTS_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true,
                posts: [],
            };
        default:
            return state
    }
};

export default feed;