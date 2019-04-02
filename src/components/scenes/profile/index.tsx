import React, {Component} from 'react';
import {Animated, Button, Image, Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import {IUser} from "../../../models/users";
import {ITodo} from "../../../models/todo";
import {getUser} from "../../../actions/user";
import {connect} from "react-redux";
import {IUserState} from "../../../reducers/profile";
import styles from "./styles";
import ProfileHeader from "../../shared/profileHeader";
import AboutMe from "../../shared/aboutMe";
import ProfilePhotos from "../../shared/profilePhotos";


interface Props {
    navigation: any,
    getUser: (userId: any) => void,
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

    componentDidMount(): void {
        this.setState({
            ...this.state,
            userId: this.props.navigation.getParam('userId', null),
        }, () => {
            this.props.getUser(this.state.userId);
        });
    }

    render() {
        const {
            user,
        } = this.props;
        return this.props.loading ?
            (
                <View>
                    <Text>Loading</Text>
                </View>
            ) :
            (
                <ScrollView
                    style={styles.container}
                >
                    <ProfileHeader user={user}/>
                    <AboutMe user={user}/>
                    <ProfilePhotos user={user}/>
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
    getUser: getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);