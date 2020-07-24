import {StyleSheet} from "react-native";
import stylevars from "_STYLES/stylevars";

const styles = StyleSheet.create({
    card: {
        position: "relative",
    },
    cardOverlay: {
        width: "100%",
        position: "absolute",
        top: 0,
    },
    cardContent: {
        position: "absolute",
        bottom: 15,
        zIndex: 1,
        padding: 15,
        height: 95,
        overflow: "hidden",
    },
    cardTitle: {
        color: "white",
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 20,
    },
    cardDescription: {
        color: stylevars.lighterTextColor,
        fontSize: 14,
        lineHeight: 20,
    },
});

export default styles;
