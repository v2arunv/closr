import React from 'react';
import CardHeader from '@sharedComponents/CardHeader';
import renderer from 'react-test-renderer';
import user from '@mocks/users';

test('renders correctly', () => {
    const tree = renderer.create(
        <CardHeader
            name={'Full Name'}
            dpURL={'http://supposedToBeALinkToAPicture.com/somepicture.jpeg'}
            onClick={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});