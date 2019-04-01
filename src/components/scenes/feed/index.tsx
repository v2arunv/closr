import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import styles from './styles';
import Card from '../../shared/card';
import CardText from '../../shared/cardText';
import MockComments from '../../../../mocks/comments';
import {getPosts} from "../../../actions/feed";
import {connect} from 'react-redux';
import {IFeedState} from '../../../reducers/feed';
import _ from 'lodash';
import {IComment} from '../../../models/comments';
import {IUser} from '../../../models/users';

interface IProps {
    navigation: any,
    getPosts: () => void,
    feedState: IFeedState,
}
interface ICardInfo {
    comments: Array<IComment>,
    user: IUser,
    body: string,
}

interface IState {
    cards: Array<ICardInfo>
}

const comments = [MockComments];

class FeedPage extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            cards: [],
        }
    }

    componentDidMount(): void {
        this.props.getPosts();
    }

    prepareFeed() {
        const {
            feedState
        } = this.props;
        const cards: Array<ICardInfo> = feedState.posts.map((post) => {
            return {
                comments: feedState.comments[post.id],
                user: feedState.users[post.userId],
                body: post.body,
            }
        });
        this.setState({
            ...this.state,
            cards,
        });
    }

    navigateToProfile = (userId: number) => {
        this.props.navigation.navigate('Profile', {
            userId,
        });
    };

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if (
            !_.get(this, 'props.feedState.isLoading', false) &&
            prevProps.feedState.isLoading == true
        ) {
            this.prepareFeed()
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {(this.state.cards.map((card: any, index: number) => {
                        return (
                            <Card
                                user={card.user}
                                comments={card.comments}
                                key={index}
                                onProfileClick={this.navigateToProfile}
                            >
                            <CardText>
                                <Text>
                                    {card.body}
                                </Text>
                            </CardText>
                        </Card>
                        )
                    }))}
                </ScrollView>

            </View>
        );
    }
}

const mapDispatchToProps = {
    getPosts: getPosts
};

const mapStateToProps = (state: any) => {
    const feedState = state.feed;
    return {
        feedState
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);