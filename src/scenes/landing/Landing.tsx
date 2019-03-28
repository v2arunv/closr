import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { container } from './styles';

interface Props {
    navigation: any
}
export default class LandingPage extends Component<Props> {
    render() {
        return (
            <View style={container}>
               <Text onPress={() => {
                   this.props.navigation.navigate('Profile')
               }}>
                   Landing Page
               </Text>
            </View>
        );
    }
}