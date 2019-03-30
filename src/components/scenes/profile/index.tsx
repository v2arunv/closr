import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { container } from '../todos/styles';
import {IUser} from "../../../models/users";
import {ITodo} from "../../../models/todo";

interface Props {
    navigation: any,
    user: IUser
}
export default class ProfilePage extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount(): void {

    }

    render() {
        return (
            <View style={container}>
                <Text>
                    Here's your best friend in the world
                </Text>
            </View>
        );
    }
}