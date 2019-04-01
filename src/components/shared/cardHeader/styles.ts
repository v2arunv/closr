import {StyleSheet} from "react-native";
import common from '../../../common/styles';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        minWidth: 100,
        paddingLeft: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: common.borderColor,
        borderBottomWidth: 0.5,
    },
    pictureContainer: {
        borderRadius: 10
    },
    picture: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    nameContainer: {
        marginLeft: 10,
    },
    name: {
        fontWeight: 'bold'
    }
});

export default styles