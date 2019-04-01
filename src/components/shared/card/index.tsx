import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from "./styles";
import CardHeader from "../cardHeader";

const Card = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <CardHeader
                    name={'Varun Vasudevan'}
                    dpURL={'https://www.eharmony.co.uk/dating-advice/wp-content/uploads/2011/04/profilephotos-960x640.jpg'}
                />
            </View>
            <View style={styles.content}>
                {props.children}
            </View>
        </View>
    )
};
export default Card;