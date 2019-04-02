import {IUserAction} from "@actions/user";
import { put, takeLatest, all } from 'redux-saga/effects';


export function* fetchUser(action: IUserAction) {
    try {
        const user = yield fetch(
            `https://jsonplaceholder.typicode.com/users/${action.id}`
        ).then(response => response.json());
        yield put({ type: 'GET_USER_SUCCESS', user});
    } catch (e) {
        yield put({ type: 'GET_USER_ERROR'});
    }

}