import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d2d2d2',
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        padding: 10,
    },
    profilePictureContainer: {
        marginBottom: 10
    },
    picture: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    nameContainer: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 32,
    }
});

export default styles