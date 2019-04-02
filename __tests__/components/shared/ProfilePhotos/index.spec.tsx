import React from 'react';
import renderer from 'react-test-renderer';
import user from '@mocks/users';
import { ProfilePhotos }from "@sharedComponents/ProfilePhotos";
import {IAlbum, IPhoto, IPhotoAlbum} from "@models/photos";
import { allMocks } from "@mocks/photos";

const album: IAlbum = {
    userId: 1,
    id: 1,
    title: 'Mock Album 1',
};

const photos: Array<IPhoto> = [ allMocks[0], allMocks[1]];

const photoAlbum: IPhotoAlbum = {
    album,
    photos,
};


const props = {
    user,
    getUserPhotos: () => {},
    isError: false,
    isLoading: false,
    albums: [photoAlbum],
    onPress: () => {},
};

test('renders correctly', () => {
    const tree = renderer.create(
        <ProfilePhotos
            {...props}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});