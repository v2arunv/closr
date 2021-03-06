import {StyleSheet} from "react-native";
import common from '../../../common/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttonContainer: {
        position: 'absolute',
        top: 30,
        left: 20,
        height: 40,
        width: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    imageContainer: {
        width: common.fullWidth,
        height: (common.fullHeight * 0.75),
    },
    image: {
        zIndex: 1,
        width: common.fullWidth,
        height: (common.fullHeight * 0.75),
    },
    loaderContainer: {
      zIndex: 300,
      width: '100%',
      height: '100%',
    },
    captionContainer: {
        position: 'absolute',
        bottom: 10,
        height: 70,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 1,
    },
    caption: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        color: '#FFFFFF',
    }
});

export default styles