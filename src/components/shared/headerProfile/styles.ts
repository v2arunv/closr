import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        minWidth: 100,
        paddingLeft: 10,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'center'
    },
    pictureContainer: {
        borderRadius: 10
    },
    picture: {
        height: 50,
        width: 50,
        borderRadius: 10,
    },
    nameContainer: {}
});

export default styles