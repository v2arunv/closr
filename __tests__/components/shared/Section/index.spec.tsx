import React from 'react';
import Section from '@sharedComponents/Section';
import renderer from 'react-test-renderer';
import user from '@mocks/users';

test('renders correctly', () => {
    const tree = renderer.create(
        <Section>
        </Section>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});