import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from './styles';
import LottieView from "lottie-react-native";

interface Props {
    navigation: any
}
export default class LandingPage extends Component<Props> {
    gotoFeed = () => {
        this.props.navigation.navigate('Feed')
    };

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.animationContainer}>
                    <LottieView
                        source={require('../../../assets/lottie/welcome.json')}
                        autoPlay
                        loop={false}
                        onAnimationFinish={this.gotoFeed}
                    />
                </View>
                <Text style={styles.appName}>
                    closr
                </Text>
            </View>
        )
    }
}