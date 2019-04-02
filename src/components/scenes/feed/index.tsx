import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
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
import Loader from "../../shared/loader";

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

    static navigationOptions = {
        title: 'Feed',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

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

    navigateToProfileGenerator = (userId: number) => {
        return (): void => {
            this.props.navigation.navigate('Profile', {
                userId,
            });
        }
    };

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if (
            !_.get(this, 'props.feedState.isLoading', false) &&
            prevProps.feedState.isLoading == true
        ) {
            this.prepareFeed()
        }
    }

    renderSuccess() {
        return (
            <View style={styles.container}>
            <ScrollView>
                {(this.state.cards.map((card: any, index: number) => {
                    return (
                        <Card
                            user={card.user}
                            comments={card.comments}
                            key={index}
                            onProfileClick={this.navigateToProfileGenerator(card.user.id)}
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

    render() {
        return (
            this.props.feedState.isLoading == true ? <Loader/> : this.renderSuccess()
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