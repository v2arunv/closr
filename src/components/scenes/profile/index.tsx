import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import { container } from '../todos/styles';
import {IUser} from "../../../models/users";
import {ITodo} from "../../../models/todo";
import {getUser} from "../../../actions/user";
import {connect} from "react-redux";
import {IUserState} from "../../../reducers/profile";

interface Props {
    navigation: any,
    user: IUser,
    getUser: any,
}
class ProfilePage extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log(this.props.user);
    }

    render() {
        return (
            <View style={container}>
                <Text>
                    Here's your best friend in the world
                </Text>
                <Button title={'FETCH'} onPress={() => {
                    this.props.getUser('10')
                }}/>
            </View>
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