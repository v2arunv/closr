import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import styles from "./styles";

const CardComment = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.pictureContainer}>
                <Image
                    style={styles.picture}
                    source={{ uri: props.dpURL}}
                    defaultSource={require('../../../assets/images/dp_placeholder.jpg')}
                />
            </View>
            <View style={styles.commentContainer}>
                <Text style={styles.name}>
                    Varun Vasudevan
                </Text>
                <Text style={styles.comment}>
                    First Comment
                </Text>
            </View>
        </View>
    )
};

export default CardComment