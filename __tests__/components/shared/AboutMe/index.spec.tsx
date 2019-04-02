import React from 'react';
import AboutMe from '@sharedComponents/AboutMe';
import renderer from 'react-test-renderer';
import user from '@mocks/users';

test('renders correctly', () => {
    const tree = renderer.create(<AboutMe user={user}/>).toJSON();
    expect(tree).toMatchSnapshot();
});