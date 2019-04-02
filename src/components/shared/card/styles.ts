import {StyleSheet} from "react-native";
import common from '@common/styles';

const styles = StyleSheet.create({
    container: {
        minHeight: 150,
        marginTop: 10,
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderBottomColor: common.borderColor,
        borderBottomWidth: 0,
    },
    header: {
        flex: 2,
    },
    content: {
        flex: 5,
    },
    comments: {
        flex: 2,
    }
});

export default styles