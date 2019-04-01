import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from "./styles";
import CardHeader from "../cardHeader";
import CardComment from "../cardComment";
import {ICardTextProps} from '../cardText'
import {IUser} from "../../../models/users";
import {IComment} from "../../../models/comments";
import _ from 'lodash';

interface ICardProps {
    children: React.ReactElement<ICardTextProps>
    user: IUser,
    comments: Array<IComment>,
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
                />
            </View>
            <View style={styles.content}>
                {children}
            </View>
            <View style={styles.comments}>
                {
                    comments.map(c =>
                        <CardComment username={c.name} commentText={c.body} key={c.id}/>
                )}
            </View>
        </View>
    )
};
export default Card;