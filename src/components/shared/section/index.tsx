import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {IUser} from "../../../models/users";
import styles from "./styles";
import common from '../../../common/styles';


interface IProps {
    children: React.ReactElement<any> | Array<React.ReactElement<any>>,
    style: any
}

const Section = (props: IProps) => {
    return(
        <View style={[styles.container, common.cardShadow, props.style]}>
            { props.children }
        </View>
    )
};

export default Section;