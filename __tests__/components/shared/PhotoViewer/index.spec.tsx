import React from 'react';
import PhotoViewer from '@sharedComponents/PhotoViewer';
import renderer from 'react-test-renderer';
import photo from '@mocks/photos';

const navProps: any = {
    getParam: () => {
        return photo;
    }
};
test('renders correctly', () => {
    const tree = renderer.create(
        <PhotoViewer
            navigation={navProps}
        />
        ).toJSON();
    expect(tree).toMatchSnapshot();
});