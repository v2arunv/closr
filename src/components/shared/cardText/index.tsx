import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from "./styles";


const CardText = (props: any) => {
    return (
        <View style={styles.container}>
            <Text>
                {props.children}
            </Text>
        </View>
    )
};

export default CardText;