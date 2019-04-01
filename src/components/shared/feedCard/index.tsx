import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from "./styles";
import HeaderProfile from "../headerProfile";

const Card = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderProfile></HeaderProfile>
            </View>
            <View style={styles.content}>

            </View>
        </View>
    )
};
export default Card;