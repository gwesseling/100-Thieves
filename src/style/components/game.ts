import {StyleSheet} from "react-native";
import stylevars from "_STYLES/stylevars";

const styles = StyleSheet.create({
    game: {
        marginRight: 15,
        height: 200,
        width: 300,
        backgroundColor: "#242729",
        borderRadius: 5,
        elevation: 1,
    },
    header: {
        height: 125,
        width: "100%",
        backgroundColor: "#1e2021",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 25,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    headerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    team: {
        height: 55,
        width: 55,
    },
    bottombar: {
        height: 75,
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
