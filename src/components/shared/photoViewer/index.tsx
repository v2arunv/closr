import React, {Component} from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import {IPhoto} from "../../../models/photos";
import _ from 'lodash';

interface Props {
    navigation: any,
}

interface State {
    photo: IPhoto | null
}

class PhotoViewer extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            photo: null
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            photo: this.props.navigation.getParam('photo', null)
        });
    }

    renderSuccess(): React.ReactElement[] {
        const {
            id,
            url,
            title,
        } = _.get(this, 'state.photo', {id: null, url: null, title: ''});
        return ([
                <View
                    style={styles.imageContainer}
                    key={`modal-photo-container-${id}`}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: url }}
                    />
                </View>,
                <View
                    style={styles.captionContainer}
                    key={`modal-caption-container-${id}`}
                >
                    <Text style={styles.caption}>
                        {title || ''}
                    </Text>
                </View>
            ])
    }

    renderLoading(): React.ReactElement {
        return(
            <View>
                <Text style={{ color: '#FFFFFF', fontSize: 46}}>
                    LOADING
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.buttonContainer}
                >
                    <Image
                        style={styles.icon}
                        source={require('../../../assets/images/modal-close.png')}
                    />
                </TouchableOpacity>
                { this.state.photo == null ? this.renderLoading() : this.renderSuccess() }
            </View>
        );
    }
}

export default PhotoViewer