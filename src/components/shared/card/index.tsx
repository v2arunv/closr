import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from "./styles";
import CardHeader from "@sharedComponents/cardHeader";
import CardComment from "@sharedComponents/cardComment";
import {ICardTextProps} from '@sharedComponents/cardText'
import {IUser} from "@models/users";
import {IComment} from "@models/comments";
import _ from 'lodash';

interface ICardProps {
    children: React.ReactElement<ICardTextProps>
    user: IUser,
    comments: Array<IComment>,
    onProfileClick: () => void,
}


const Card = (props: ICardProps) => {
    const {
        user,
        children,
    } = props;
    const comments: Array<IComment> = _.get(props, 'comments', []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <CardHeader
                    name={user.name || ''}
                    dpURL={user.profilePictureURL}
                    onClick={props.onProfileClick}
                />
            </View>
            <View style={styles.content}>
                {children}
            </View>
            <View style={styles.comments}>
                {
                    comments.map((c, index) =>
                        <CardComment username={c.name} commentText={c.body} key={`${c.postId}-${c.id}`}/>
                )}
            </View>
        </View>
    )
};
export default Card;