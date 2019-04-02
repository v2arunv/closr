import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Card from '@sharedComponents/Card';
import CardText from '@sharedComponents/CardText';
import {getPosts, resetState} from "@actions/feed";
import {connect} from 'react-redux';
import {IFeedState} from '@reducers/feed';
import {IComment} from '@models/comments';
import {IUser} from '@models/users';
import Loader from "@sharedComponents/Loader";
import common from '@common/styles';
import _ from 'lodash';
import {NavigationScreenProp} from "react-navigation";


interface IProps {
    navigation: NavigationScreenProp<any>,
    getPosts: () => void,
    resetState: () => void,
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

    componentWillUnmount(): void {
        this.props.resetState();
    }

    static navigationOptions = {
        title: 'Feed',
        headerStyle: {
            backgroundColor: common.primaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };


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
    getPosts: getPosts,
    resetState: resetState,
};

const mapStateToProps = (state: any) => {
    const feedState = state.feed;
    return {
        feedState
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);