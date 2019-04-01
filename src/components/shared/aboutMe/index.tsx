import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {IUser} from "../../../models/users";
import styles from "./styles";
import common from '../../../common/styles';
import Section from "../section";


interface IProps {
    user: IUser,
}

const AboutMe = (props: IProps) => {
    const {
        user,
    } = props;
    return(
        <Section>
            <View
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
            </View>
            <View
                style={[styles.row, styles.lastRow]}
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
            </View>
        </Section>
    )
};

export default AboutMe;