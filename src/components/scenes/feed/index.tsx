import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import styles from './styles';
import Card from "../../shared/card";
import CardText from "../../shared/cardText";
import MockUser from '../../../../mocks/users';
import MockComments from '../../../../mocks/comments';
import {getPosts} from "../../../actions/feed";
import {connect} from "react-redux";
interface Props {
    navigation: any,
    getPosts: () => void,
}
const user = MockUser;
const comments = [MockComments];

class FeedPage extends Component<Props> {

    componentDidMount(): void {
        console.log('on mount call');
        this.props.getPosts();
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Card
                        user={user}
                        comments={comments}
                    >
                        <CardText>
                            <Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                        </CardText>
                    </Card>

                </ScrollView>

            </View>
        );
    }
}

const mapDispatchToProps = {
    getPosts: getPosts
};

const mapStateToProps = (state: any) => {
    console.log(state);
    return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);