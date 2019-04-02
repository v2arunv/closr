import { put, takeLatest, all } from 'redux-saga/effects';
import {IUserPhotosAction} from "../actions/userPhotos";
import {convertAlbumPayloadIntoModel, IAlbum} from "../models/photos";
import _ from 'lodash';

export function* fetchPhotosForUsers(action: IUserPhotosAction) {
    try {
        const albums = yield fetch(
            `https://jsonplaceholder.typicode.com/albums/?userId=${action.userId}`
        ).then(response => response.json())
        .then((albums) => albums.map(convertAlbumPayloadIntoModel));

        const uniqueAlbumList = _.uniq(albums.map((a: IAlbum) => a.id));

        yield put({ type: 'GET_PHOTOS_SUCCESS', albums});
    } catch (e) {
        yield put({ type: 'GET_PHOTOS_ERROR'});
    }

}