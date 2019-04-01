import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import styles from "./styles";
import {IUser} from "../../../models/users";

interface ICardComment {
    username: string,
    commentText: string,
    profilePictureURL?: string,
}

const CardComment = (props: ICardComment) => {
    const {
        username,
        commentText,
        profilePictureURL
    } = props;
    return (
        <View style={styles.container}>
            <View style={styles.pictureContainer}>
                <Image
                    style={styles.picture}
                    source={{ uri: profilePictureURL}}
                    defaultSource={require('../../../assets/images/dp_placeholder.jpg')}
                />
            </View>
            <View style={styles.commentContainer}>
                <Text style={styles.name}>
                    {username}
                </Text>
                <Text style={styles.comment}>
                    {commentText}
                </Text>
            </View>
        </View>
    )
};

export default CardComment