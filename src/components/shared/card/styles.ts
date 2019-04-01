import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        minHeight: 150,
        marginTop: 10,
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
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