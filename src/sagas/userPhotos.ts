import { put, takeLatest, all } from 'redux-saga/effects';
import {IUserPhotosAction} from '@actions/userPhotos';
import {convertAlbumPayloadIntoModel, convertPhotoPayloadIntoModel, IAlbum, IPhotoAlbum} from '@models/photos';
import _ from 'lodash';

export function* fetchPhotosForUsers(action: IUserPhotosAction) {
    try {
        const albums = yield fetch(
            `https://jsonplaceholder.typicode.com/albums/?userId=${action.userId}`
        ).then(response => response.json())
        .then((albums) => albums.map(convertAlbumPayloadIntoModel));

        const uniqueAlbumList = _.uniq(albums.map((a: IAlbum) => a.id));

        const photoAlbumsPromises = uniqueAlbumList.map((id) => {
            return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then(r => r.json())
            .then((photosPayload: any) => {
                const convertedPhotos = photosPayload.map(convertPhotoPayloadIntoModel);
                const album = _.find(albums, a => a.id === id);
                return <IPhotoAlbum> {
                    album,
                    photos: convertedPhotos
                }
            });
        });

        const photoAlbums: Array<IPhotoAlbum> = yield Promise.all(photoAlbumsPromises);
        yield put({ type: 'GET_PHOTOS_SUCCESS', albums: photoAlbums});
    } catch (e) {
        yield put({ type: 'GET_PHOTOS_ERROR'});
    }

}