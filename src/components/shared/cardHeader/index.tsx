import React from 'react';
import {
    Image,
    View,
    Text, TouchableOpacity
} from 'react-native';
import styles from "./styles";

interface IHeaderProfileProps {
    name: string,
    dpURL: string | undefined,
    onClick: () => void
}


const CardHeader = (props: IHeaderProfileProps) => {

    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.pictureContainer}
                onPress={props.onClick}
            >
                <Image
                    style={styles.picture}
                    source={{ uri: props.dpURL }}
                    defaultSource={require('../../../assets/images/dp_placeholder.jpg')}
                />
            </TouchableOpacity>
            <View
                style={styles.nameContainer}
            >
                <Text style={styles.name}>
                    {props.name}
                </Text>

            </View>
        </View>
    )
};

export default CardHeader;