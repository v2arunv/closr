import {StyleSheet} from "react-native";
import common from "../../../common/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    pictureContainer: {
        width: 30,
        height: 30
    },
    picture: {
        padding: 5,
        width: 25,
        height: 25,
        borderRadius: 12.5,
    },
    commentContainer: {
        padding: 5,
        marginLeft: 5,
        backgroundColor: '#c1d0ff',
        width: '70%',
        borderRadius: 10
    },
    name: {
        fontWeight: 'bold',
    },
    comment: {
        marginTop: 5
    },

});

export default styles;