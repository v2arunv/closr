import { put, takeLatest, all } from 'redux-saga/effects';
import {fetchFeed} from "./feed";
import {fetchUser} from "./users";
import {fetchPhotosForUsers} from "./userPhotos";

function* actionWatcher() {
    yield takeLatest('GET_POSTS_INIT', fetchFeed);
    yield takeLatest('GET_USER', fetchUser);
    yield takeLatest('GET_USER_PHOTOS', fetchPhotosForUsers);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}