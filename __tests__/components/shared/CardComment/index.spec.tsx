import React from 'react';
import CardComment from '@sharedComponents/CardComment';
import renderer from 'react-test-renderer';
import user from '@mocks/users';

test('renders correctly', () => {
    const tree = renderer.create(
        <CardComment
            username={'user'}
            commentText={'comment'}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});