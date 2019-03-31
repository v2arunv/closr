import React, {ReactChild} from 'react';
import {Animated, View} from 'react-native';
import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from "react-native-gesture-handler";

interface ISwipeableProps {
    children: Array<ReactChild>,
    onSwipeOpen: () => void,
    onSwipeClose: () => void,
}

const renderLeftActions = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
        inputRange: [0, 50, 100, 101],
        outputRange: [-20, 0, 0, 1],
    });
    console.log('trans', trans);
    return (
        <RectButton style={{ backgroundColor: 'black', width: '100%' }} >
            <Animated.Text
                style={[
                    {
                        transform: [{ translateX: trans }],
                    },
                ]}>

            </Animated.Text>
        </RectButton>
    );
};

const SwiperParent = (props: ISwipeableProps) => {
        return (
            <View style={styles.container}>
                <Swipeable
                    onSwipeableWillOpen={props.onSwipeOpen}
                    leftThreshold={30}
                    rightThreshold={40}
                    onSwipeableClose={props.onSwipeClose}
                    renderLeftActions={renderLeftActions}
                    renderRightActions={renderLeftActions}
                >
                    { props.children }
                </Swipeable>
            </View>
        )
};

export default SwiperParent;