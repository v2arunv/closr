import {StyleSheet} from "react-native";
import common from '@common/styles';

const styles = StyleSheet.create({

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
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    nameContainer: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 32,
    },
    username: {
        fontWeight: '300',
        color: common.subtextColor,
    }
});

export default styles