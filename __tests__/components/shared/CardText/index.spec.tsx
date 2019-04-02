import React from 'react';
import CardText from '@sharedComponents/CardText';
import renderer from 'react-test-renderer';
import user from '@mocks/users';

test('renders correctly', () => {
    const tree = renderer.create(
        <CardText>
        </CardText>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});