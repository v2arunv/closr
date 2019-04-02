import React from 'react';
import ProfileHeader from '@sharedComponents/ProfileHeader';
import renderer from 'react-test-renderer';
import user from '@mocks/users';

test('renders correctly', () => {
    const tree = renderer.create(<ProfileHeader user={user}/>).toJSON();
    expect(tree).toMatchSnapshot();
});