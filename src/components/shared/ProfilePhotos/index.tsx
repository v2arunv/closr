import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {Component} from "react";
import {IUser} from "@models/users";
import styles from "./styles";
import Section from "../Section";
import {getUserPhotos} from "@actions/userPhotos";
import {connect} from "react-redux";
import {IPhoto, IPhotoAlbum} from "@models/photos";
import Loader from "../Loader";


interface IProps {
    user: IUser,
    getUserPhotos: (id: number) => void,
    isError: boolean,
    isLoading: boolean,
    albums: Array<IPhotoAlbum>,
    onPress: (photo: IPhoto) => void,
}

class ProfilePhotos extends Component<IProps> {
    componentDidMount(): void {
        this.props.getUserPhotos(this.props.user.id);
    }

    renderAlbum(album: IPhotoAlbum, albumIndex: number): React.ReactElement<any> {
        const {
            photos,
        } = album;
        const {
            onPress
        } = this.props;
        return(
            <View
                style={styles.albumHeader}
                key={`album-${albumIndex}`}
            >
                <Text>
                    {album.album.title}
                </Text>
                <ScrollView
                    horizontal
                    style={styles.scrollContainer}
                >
                    {photos.map((photo, photoIndex) => {
                        return (
                            <TouchableOpacity
                                style={styles.imageContainer}
                                key={`photo-container-${photoIndex}`}
                                onPress={onPress(photo)}
                            >
                                <Image
                                    style={styles.thumbnail}
                                    key={`photo-${photoIndex}`}
                                    source={{ uri: photo.thumbnailUrl}}
                                    defaultSource={require('../../../assets/images/beach-parasol-water-1.png')}
                                />
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }

    renderSuccess(): React.ReactElement<any> {
        const {
            albums
        } = this.props;
        return (
            <Section>
                <Text style={styles.albumSectionHeader}>
                    Photos
                </Text>
                <View style={styles.allAlbumContainer}>
                    {albums.map((album, index)=> this.renderAlbum(album, index))}
                </View>
            </Section>
        )
    }

    renderLoading(): React.ReactElement<any> {
        return (
            <Section style={styles.loaderContainer}>
                <Loader/>
            </Section>
        )
    }

    render(): React.ReactNode {
        const {
            user,
            isLoading,
        } = this.props;


        return(
            isLoading ? this.renderLoading() : this.renderSuccess()
        );
    }
}

const mapDispatchToProps = {
    getUserPhotos: getUserPhotos,
};

const mapStateToProps = (state: any) => {
    const {
        userPhotos
    } = state;
    return userPhotos;
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePhotos);
export {
    ProfilePhotos,
}