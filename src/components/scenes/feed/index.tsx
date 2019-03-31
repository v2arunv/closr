import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Animated, Text, View} from 'react-native';
import styles from './styles';
import {IUser} from "../../../models/users";
import {getUser} from "../../../actions/user";
import {connect} from "react-redux";
import {container} from "../landing/styles";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import SwiperParent from "../../shared/swiper-parent";


interface Props {
    navigation: any,

}
class FeedPage extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }



    closeSwipe(): void {
        console.log('SWIPE');
    }

    openSwipe(): void {
        console.log('OPEN');
    }

    render(): React.ReactNode {
        return (
                <View style={styles.container}>
                    <SwiperParent
                        onSwipeOpen={this.openSwipe}
                        onSwipeClose={this.closeSwipe}
                    >
                        <View style={styles.card}>
                            <Text>
                                Content goes here
                            </Text>
                        </View>
                        <View style={styles.card}>
                            <Text>
                                Content goes here
                            </Text>
                        </View>
                        <View style={styles.card}>
                            <Text>
                                Content goes here
                            </Text>
                        </View>
                        <View style={styles.card}>
                            <Text>
                                Content goes here
                            </Text>
                        </View>
                        <View style={styles.card}>
                            <Text>
                                Content goes here
                            </Text>
                        </View>
                        <View style={styles.card}>
                            <Text>
                                Content goes here
                            </Text>
                        </View>
                    </SwiperParent>
                </View>
        )
    }


}

export default FeedPage;