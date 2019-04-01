import { put, takeLatest, all } from 'redux-saga/effects';
import {convertPayloadToModel, IPost} from "../models/posts";
import { convertPayloadToModel as convertPayloadToUserModel } from '../models/users';
import {IFeedAction} from "../actions/feed";
import _ from 'lodash';
import {IUser} from "../models/users";

export function* fetchFeed(action: IFeedAction) {
    try {
        let uniqueUsers: Array<number> = [];
        const posts: Array<IPost> = yield fetch(
            `https://jsonplaceholder.typicode.com/posts`
        )
        .then(response => response.json())
        .then(posts => {
            // Convert Post JSON data into our model
            const convertedPosts: Array<IPost> = _.take(posts.map(convertPayloadToModel), 10)

            // Create a list of unique user ids to fetch data for
            uniqueUsers = _.uniq(convertedPosts.map(p => p.userId));
            return convertedPosts;
        });

        // Create an array of promises to fetch all user data
        const promiseArray = uniqueUsers.map(userId => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(p => p.json());
        });
        const users: Array<IUser> = yield Promise.all(promiseArray)
            .then(payloads => payloads.map(convertPayloadToUserModel));

        yield put({ type: 'GET_POSTS_SUCCESS', posts: posts, users: users });
    } catch (e) {
        yield put({ type: 'GET_POSTS_ERROR'});
    }

}