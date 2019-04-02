import {Dimensions} from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default {
    fullWidth: screenWidth,
    fullHeight: screenHeight,
    subtextColor: '#505050',
    commentBackgroundColor: '#c1d0ff',
    baseBackgroundColor: '#d2d2d2',
    borderColor: '#dfdfdf',
    primaryColor: '#0892a5',
    secondaryColor: '#26C485',
    cardShadow: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    }
}