import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from './styles';

interface Props {
    navigation: any
}
export default class LandingPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
               <Text onPress={() => {
                   this.props.navigation.navigate('Profile', {
                       userId: 1,
                   })
               }}>
                   User Profile
               </Text>
                <Text onPress={() => {
                    this.props.navigation.navigate('Feed')
                }}>
                    Feed
                </Text>
            </View>
        );
    }
}