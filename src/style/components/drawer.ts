import {StyleSheet} from "react-native";
import stylevars from "_STYLES/stylevars";

const styles = StyleSheet.create({
    drawer: {
        height: "100%",
        width: "80%",
        backgroundColor: stylevars.primaryColor,
        position: "absolute",
        top: 0,
        zIndex: 999,
    },
    drawerOverlay: {
        height: "100%",
        width: "20%",
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: stylevars.drawerOverlay,
    },
    drawerItemText: {
        color: stylevars.textColor,
        padding: 25,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default styles;
