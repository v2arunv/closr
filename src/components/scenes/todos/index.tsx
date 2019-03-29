import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { container, listStyle } from './styles';
import {ITodo} from "../../../models/todo";

interface Props {
    navigation: any
    todos: Array<ITodo>,
}
class TodosPage extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={container}>
                <Text>
                    Todo
                </Text>
                <View style={listStyle}>
                    { this.props.todos.map(t => {
                        return (
                            <Text>
                                {t.title}
                            </Text>
                        )
                    })}
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state: any): Array<ITodo> => {
    return state;
}

export default connect(mapStateToProps)(TodosPage);