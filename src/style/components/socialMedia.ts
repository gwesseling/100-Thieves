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
        backgroundColor: "#242729",
    },
    icon: {
        marginRight: 10,
    },
    text: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default styles;
