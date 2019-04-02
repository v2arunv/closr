import {Image, Text, View} from "react-native";
import React from "react";
import {IUser} from "@models/users";
import styles from "./styles";
import common from '@common/styles';
interface IProps {
    user: IUser,
}

const ProfileHeader = (props: IProps) => {
    const {
        user,
    } = props;
    return(
        <View style={[styles.header, common.cardShadow]}>
            <View style={styles.profilePictureContainer}>
                <Image
                    style={styles.picture}
                    source={{ uri: 'http://www.sclance.com/pngs/image-placeholder-png/image_placeholder_png_698152.png' }}
                    defaultSource={require('../../../assets/images/dp_placeholder.jpg')}
                />
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>
                    { user.name}
                </Text>
                <Text style={styles.username}>
                    @{ user.username }
                </Text>
            </View>
        </View>
    )
};

export default ProfileHeader;