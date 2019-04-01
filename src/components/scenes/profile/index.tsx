import React, {Component} from 'react';
import {Button, Image, Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import {IUser} from "../../../models/users";
import {ITodo} from "../../../models/todo";
import {getUser} from "../../../actions/user";
import {connect} from "react-redux";
import {IUserState} from "../../../reducers/profile";
import styles from "./styles";

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
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.profilePictureContainer}>
                            <Image
                                style={styles.picture}
                                source={{ uri: 'https://pbs.twimg.com/profile_images/981164521594040323/ONbHPtjU_400x400.jpg' }}
                                defaultSource={require('../../../assets/images/dp_placeholder.jpg')}
                            />
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>
                                { user.name}
                            </Text>
                            <Text>
                                { user.username }
                            </Text>
                        </View>
                    </View>
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