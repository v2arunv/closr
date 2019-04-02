import React, {Component} from 'react';
import {Button, Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import {IPhoto} from '@models/photos';
import _ from 'lodash';
import Loader from "../Loader";
import {NavigationScreenProp} from "react-navigation";

interface Props {
    navigation: NavigationScreenProp<any>,
}

interface State {
    photo: IPhoto | null
    isLoading: boolean
}

class PhotoViewer extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            photo: null,
            isLoading: true,
        }
    }

    componentDidMount() {
        this.setState({
            photo: this.props.navigation.getParam('photo', null)
        });
    }

    renderLoader() {
        return (
            <View style={styles.loaderContainer}>
                <Loader/>
            </View>
        )
    }

    finishLoading = () => {
        this.setState({
            isLoading: false,
        })
    };

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
                    <ImageBackground
                        style={styles.image}
                        source={{ uri: url }}
                        onLoadEnd={this.finishLoading}
                    >
                    {
                        this.state.isLoading ? this.renderLoader() : null
                    }
                    </ImageBackground>
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
                <Loader/>
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