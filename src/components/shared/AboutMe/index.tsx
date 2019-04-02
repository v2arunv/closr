import {Image, Linking, Text, TouchableOpacity} from "react-native";
import React from "react";
import {IUser} from "@models/users";
import styles from "./styles";
import Section from "@sharedComponents/Section";


interface IProps {
    user: IUser,
}

const openEmail = (email:string) => {
    return () => {
        Linking.canOpenURL(`mailto:${email}`)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(`mailto:${email}`);
                }
            }).catch((err) => {
            console.log('error Linking', err)
        })
    }
};

const openPhone = (phone:string = '*') => {
    return () => {
        Linking.canOpenURL(`tel:${phone}`)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(`tel:${phone}`);
                }
            }).catch((err) => {
            console.log('error Linking', err)
        })
    }
};

const AboutMe = (props: IProps) => {
    const {
        user,
    } = props;
    return(
        <Section>
            <TouchableOpacity
                onPress={openPhone(user.phone)}
                style={styles.row}
            >
                <Image
                    source={require('../../../assets/images/phone-actions-ring.png')}
                    style={styles.icon}
                />
                <Text
                    style={styles.rowText}
                >
                    { user.phone }
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.row, styles.lastRow]}
                onPress={openEmail(user.email)}
            >
                <Image
                    source={require('../../../assets/images/send-email-2.png')}
                    style={styles.icon}
                />
                <Text
                    style={styles.rowText}
                >
                    { user.email }
                </Text>
            </TouchableOpacity>
        </Section>
    )
};

export default AboutMe;