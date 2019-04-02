import React from 'react';
import Card from '@sharedComponents/Card';
import renderer from 'react-test-renderer';
import user from '@mocks/users';
import comment from '@mocks/comments'
import CardText from "@sharedComponents/CardText";
import {IComment} from "@models/comments";

const comments: Array<IComment> = [ comment ];
test('renders correctly', () => {
    const tree = renderer.create(
        <Card user={user}
              comments={comments}
              onProfileClick={() => {}}
        >
            <CardText>
            </CardText>
        </Card>
        ).toJSON();
    expect(tree).toMatchSnapshot();
});