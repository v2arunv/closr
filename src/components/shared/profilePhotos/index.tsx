import {Image, Text, TouchableOpacity, View} from "react-native";
import React, {Component} from "react";
import {IUser} from "../../../models/users";
import styles from "./styles";
import common from '../../../common/styles';
import Section from "../section";
import {getUserPhotos} from "../../../actions/userPhotos";
import {connect} from "react-redux";


interface IProps {
    user: IUser,
    getUserPhotos: (id: number) => void,
}

class UserPhotos extends Component<IProps> {
    componentDidMount(): void {
        this.props.getUserPhotos(this.props.user.id);
    }

    render(): React.ReactNode {
        const {
            user,
        } = this.props;
        return(
            <Section>

            </Section>
        )   ;
    }
};

const mapDispatchToProps = {
    getUserPhotos: getUserPhotos,
};

const mapStateToProps = (state: any) => {
    const {
        userPhotos
    } = state;
    return userPhotos;
}

export default connect(mapStateToProps,mapDispatchToProps)(UserPhotos);