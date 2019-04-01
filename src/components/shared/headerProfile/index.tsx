import React from 'react';
import {
    Image,
    ImageRequireSource,
    ImageURISource,
    View
} from 'react-native';
import styles from "./styles";

interface IHeaderProfileProps {
    name: string,
    dpURL: ImageURISource | ImageURISource[] | ImageRequireSource,
}


const HeaderProfile = (props: IHeaderProfileProps) => {

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.pictureContainer}
            >
                <Image
                    style={styles.picture}
                    source={props.dpURL}
                    defaultSource={require('../../../assets/images/dp_placeholder.jpg')}
                />
            </View>
            <View
                style={styles.nameContainer}
            >

            </View>
        </View>
    )
};

export default HeaderProfile;