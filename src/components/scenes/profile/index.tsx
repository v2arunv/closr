import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {IUser} from "../../../models/users";
import {ITodo} from "../../../models/todo";
import {getUser} from "../../../actions/user";
import {connect} from "react-redux";
import {IUserState} from "../../../reducers/profile";
import styles from "./styles";

interface Props {
    navigation: any,
    getUser: any,
    userId: number
}
class ProfilePage extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount(): void {
        console.log(this.props.navigation.getParam('userId', null));
    }

    render() {
        return (
            <View style={styles.container}>
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