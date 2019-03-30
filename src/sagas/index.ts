import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchUser() {
    console.log('IN fetchUser');
    const user = yield fetch(
        'https://jsonplaceholder.typicode.com/users/2'
    ).then(response => response.json());
    yield put({ type: 'GET_USER_SUCCESS', user});
}
function* actionWatcher() {
    console.log('IN ACTIONWATCHER');
    yield takeLatest('GET_USER', fetchUser)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}