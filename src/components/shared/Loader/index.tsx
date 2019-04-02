import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import styles from "./styles";
import LottieView from "lottie-react-native";


const Loader = () => {
    return(
        <View style={styles.fullscreen}>
            <LottieView source={require('../../../assets/lottie/loader.json')} autoPlay loop />
        </View>
    )
};

export default Loader;