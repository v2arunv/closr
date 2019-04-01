import React from 'react';
import {
    Image,
    View,
    Text
} from 'react-native';
import styles from "./styles";

interface IHeaderProfileProps {
    name: string,
    dpURL: string | undefined,
}


const CardHeader = (props: IHeaderProfileProps) => {

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.pictureContainer}
            >
                <Image
                    style={styles.picture}
                    source={{ uri: props.dpURL }}
                    defaultSource={require('../../../assets/images/dp_placeholder.jpg')}
                />
            </View>
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