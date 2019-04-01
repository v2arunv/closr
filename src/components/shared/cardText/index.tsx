import React from 'react';
import {Text, View} from 'react-native';
import styles from "./styles";

export interface ICardTextProps {
    children: React.ReactElement<Text> [] | React.ReactElement<Text>
}

const CardText = (props: ICardTextProps) => {
    return (
        <View style={styles.container}>
            <Text>
                {props.children}
            </Text>
        </View>
    )
};

export default CardText;