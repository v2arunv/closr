import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import { container } from '../todos/styles';
import {IUser} from "../../../models/users";
import {ITodo} from "../../../models/todo";
import {getUser} from "../../../actions/user";
import {connect} from "react-redux";

interface Props {
    navigation: any,
    user: IUser
    getUser: any,
}
class ProfilePage extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={container}>
                <Text>
                    Here's your best friend in the world
                </Text>
                <Button title={'FETCH'} onPress={this.props.getUser}/>
            </View>
        );
    }
}

const mapDispatchToProps = {
    getUser: getUser
};

export default connect(null, mapDispatchToProps)(ProfilePage);