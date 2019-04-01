import {IPost} from "../models/posts";
import {IFeedAction} from "../actions/feed";
import {IUser} from "../models/users";
import _ from 'lodash';
import posts from "../../mocks/posts";

export interface IFeedState {
    isLoading: boolean,
    isError: boolean,
    posts: Array<IPost> | null,
    users: any,
}

const initialState = {
    isLoading: true,
    isError: false,
    posts: [],
    users: {},
};

const convertUserArrayPayloadIntoLookupMap = (users: Array<IUser> = []) => {
    return _.reduce(users, (acc: any, val: IUser) => {
        return {
            [val.id]: val,
        };
    }, {})
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
            console.log('feed success', action);
            return {
                ...state,
                isLoading: false,
                posts: action.posts || [],
                users: convertUserArrayPayloadIntoLookupMap(action.users),
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