import {StyleSheet} from "react-native";
import stylevars from "_STYLES/stylevars";

const styles = StyleSheet.create({
    video: {
        marginRight: 15,
        height: 150,
        width: 300,
    },
    videoOverlay: {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        zIndex: 1,
    },
    videoImage: {
        height: "100%",
        width: "100%",
        borderRadius: stylevars.borderRadius,
    },
    videoContent: {
        position: "absolute",
        padding: 5,
        paddingBottom: 10,
        bottom: 0,
        zIndex: 1,
    },
    videoTitle: {
        color: stylevars.titleColor,
        fontWeight: "bold",
    },
});

export default styles;
