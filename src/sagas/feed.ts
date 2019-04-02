import { put} from 'redux-saga/effects';
import {convertPayloadToModel, IPost} from '@models/posts';
import { convertPayloadToModel as convertPayloadToUserModel } from '@models/users';
import {convertPayloadToModel as convertPayloadToCommentsModel, IComment} from '@models/comments';
import {IFeedAction} from '@actions/feed';
import {IUser} from '@models/users';
import _ from 'lodash';

export function* fetchFeed(action: IFeedAction) {
    try {
        let uniqueUsers: Array<number> = [];
        const posts: Array<IPost> = yield fetch(
            `https://jsonplaceholder.typicode.com/posts`
        )
        .then(response => response.json())
        .then(posts => {
            // Convert Post JSON data into our model
            const convertedPosts: Array<IPost> = _.take(posts.map(convertPayloadToModel), 10);

            // Create a list of unique user ids to fetch data for
            uniqueUsers = _.uniq(convertedPosts.map(p => p.userId));
            return convertedPosts;
        });

        // Create an array of promises to fetch all user data
        const userPromiseArray = uniqueUsers.map(userId => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(p => p.json());
        });

        const commentsPromiseArray = posts.map(post => {
            return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
            .then(p => p.json());
        });

        const users: Array<IUser> = yield Promise.all(userPromiseArray)
        .then(payloads => payloads.map(convertPayloadToUserModel));

        const comments: Array<IComment> = yield Promise.all(commentsPromiseArray)
        .then(payloads => {
            const allComments = payloads.reduce((acc, val) => {
                val.map(convertPayloadToCommentsModel).forEach((c: IComment) => acc.push(c));
                return acc;
            }, []);
            return allComments;
        });

        yield put({ type: 'GET_POSTS_SUCCESS', posts: posts, users: users, comments: comments });
    } catch (e) {
        yield put({ type: 'GET_POSTS_ERROR'});
    }

}