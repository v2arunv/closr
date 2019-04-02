import {IPhotoAlbum} from "../models/photos";

export interface IUserPhotosAction {
    type:
        'GET_PHOTOS_INIT'
        | 'GET_PHOTOS_SUCCESS'
        | 'GET_PHOTOS_ERROR'
    albums?: Array<IPhotoAlbum>
    userId: number,
}

export const getUserPhotos = (id: number): IUserPhotosAction => {
    console.log('getuserphotos called');
    return {
        type: "GET_PHOTOS_INIT",
        userId: id,
    }
};