import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { container } from './styles';
import {ITodo} from "../../../models/todo";

interface Props {
    navigation: any
}
class TodosPage extends Component<Props> {
    render() {
        return (
            <View style={container}>
                <Text>
                    Here's your best friend in the world
                </Text>
            </View>
        );
    }
}

const mapStateToProps = (state: ITodo) => {
    return state;
}

export default connect(mapStateToProps)(TodosPage);