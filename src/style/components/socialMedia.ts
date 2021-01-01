import {StyleSheet} from "react-native";
import stylevars from "_STYLES/stylevars";

const styles = StyleSheet.create({
    container: {
        minWidth: 150,
    },
    content: {
        flex: 1,
        flexDirection: "row",
        borderRadius: 5,
        alignItems: "center",
        marginRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: stylevars.cardBackground,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        color: stylevars.titleColor,
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default styles;
