import React from 'react';
import Loader from '@sharedComponents/Loader';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Loader/>).toJSON();
    expect(tree).toMatchSnapshot();
});