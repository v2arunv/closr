import { put, takeLatest, all } from 'redux-saga/effects';
import {IUserAction} from "../actions/user";
import {fetchFeed} from "./feed";

function* fetchUser(action: IUserAction) {
    try {
        const user = yield fetch(
            `https://jsonplaceholder.typicode.com/users/${action.id}`
        ).then(response => response.json());
        yield put({ type: 'GET_USER_SUCCESS', user});
    } catch (e) {
        yield put({ type: 'GET_USER_ERROR'});
    }

}
function* actionWatcher() {
    yield takeLatest('GET_POSTS_SUCCESS', fetchAllUsers)
    yield takeLatest('GET_POSTS_INIT', fetchFeed);
    yield takeLatest('GET_USER', fetchUser)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}