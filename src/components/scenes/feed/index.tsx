import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import styles from './styles';
import Card from "../../shared/feedCard";

interface Props {
    navigation: any
}
class FeedPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </ScrollView>

            </View>
        );
    }
}

export default FeedPage;