import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { container } from './styles';

interface Props {
    navigation: any
}
export default class ProfilePage extends Component<Props> {
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