export interface IPhoto {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
}

export interface IAlbum {
    userId: number,
    id: number,
    title: string,
}

export interface IPhotoAlbum {
    album: IAlbum,
    photos: Array<IPhoto>
}

export const convertAlbumPayloadIntoModel = (payload: any) => {
    const {
        userId,
        id,
        title
    } = payload;
    return <IAlbum> {
        userId,
        id,
        title,
    }
};

export const convertPhotoPayloadIntoModel = (payload: any) => {
    const {
        albumId,
        id,
        title,
        url,
        thumbnailUrl,
    } = payload;
    return <IPhoto> {
        albumId,
        id,
        title,
        url,
        thumbnailUrl,
    }
};