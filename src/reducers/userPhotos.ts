import {IPhotoAlbum} from "../models/photos";
import {IUserPhotosAction} from "../actions/userPhotos";

export interface IUserPhotosState {
    albums: Array<IPhotoAlbum>,
    isLoading: boolean,
    isError: boolean,
    userId: number | null,

}

const initialState: IUserPhotosState = {
    albums: [],
    isLoading: true,
    isError: false,
    userId: null,
};

const userPhotos = (state = initialState, action: IUserPhotosAction) => {
    switch (action.type) {
        case 'GET_PHOTOS_INIT':
            return {
                isLoading: true,
                isError: false,
                albums: [],
                action: action.userId
            };
        case 'GET_PHOTOS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                albums: action.albums || []
            };
        case 'GET_PHOTOS_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true,
                albums: [],
            };
        default:
            return state
    }
};

export default userPhotos;