import {StyleSheet} from "react-native";
import stylevars from "_STYLES/stylevars";

const styles = StyleSheet.create({
    game: {
        marginRight: 15,
        height: 200,
        width: 300,
        backgroundColor: stylevars.cardBackground,
        borderRadius: stylevars.borderRadius,
        elevation: 1,
    },
    header: {
        height: 125,
        width: "100%",
        backgroundColor: stylevars.lightGray,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 25,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerText: {
        color: stylevars.titleColor,
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
