import React, {Component} from 'react';
import {Animated, Button, EventSubscription, Image, Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import {IUser} from "../../../models/users";
import {ITodo} from "../../../models/todo";
import {getUser, resetState} from "../../../actions/user";
import {connect} from "react-redux";
import {IUserState} from "../../../reducers/profile";
import styles from "./styles";
import ProfileHeader from "@sharedComponents/profileHeader";
import AboutMe from "@sharedComponents/aboutMe";
import ProfilePhotos from "@sharedComponents/profilePhotos";
import {IPhoto} from "@models/photos";
import LottieView from 'lottie-react-native';
import Loader from "@sharedComponents/loader";
import common from '@common/styles';


interface Props {
    navigation: NavigationScreenProp<any>,
    getUser: (userId: any) => void,
    resetState: () => void,
    userId: number,
    loading: boolean,
    error: boolean,
    user: IUser
}
interface State {
    userId: number | null,
}

class ProfilePage extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            userId: null,
        }
    }

    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            backgroundColor: common.secondaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    componentDidMount(): void {
        this.setState({
            userId: this.props.navigation.getParam('userId', null),
        }, () => {
            this.props.getUser(this.state.userId);
        });
    }

    componentWillUnmount(): void {
        this.props.resetState();
    }

    gotoPhotoModal = (photo: IPhoto) => {
        return () => {
            this.props.navigation.navigate('PhotoViewer', {
                photo,
            });
        }
    }

    render() {
        const {
            user,
        } = this.props;
        return this.props.loading ?
            (
                <Loader/>
            ) :
            (
                <ScrollView
                    style={styles.container}
                >
                    <ProfileHeader user={user}/>
                    <AboutMe user={user}/>
                    <ProfilePhotos
                        user={user}
                        onPress={this.gotoPhotoModal}
                    />
                    <View style={styles.gap}/>
                </ScrollView>
            );
    }
}

const mapStateToProps = (state: any) => {
    const userState = state.user;
    const { user, loading, error } = userState;
    return {
        user,
        loading,
        error,
    };
};

const mapDispatchToProps = {
    getUser: getUser,
    resetState: resetState,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);