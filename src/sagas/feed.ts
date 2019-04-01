import { put, takeLatest, all } from 'redux-saga/effects';
import {convertPayloadToModel, IPost} from "../models/posts";
import {IFeedAction} from "../actions/feed";
import _ from 'lodash';

export function* fetchFeed(action: IFeedAction) {
    try {
        const posts: Array<IPost> = yield fetch(
            `https://jsonplaceholder.typicode.com/posts`
        )
        .then(response => response.json())
        .then(posts => {
            return _.take(posts.map(convertPayloadToModel), 10);
        });
        yield put({ type: 'GET_POSTS_SUCCESS', posts});
    } catch (e) {
        yield put({ type: 'GET_POSTS_ERROR'});
    }

}