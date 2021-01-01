import {StyleSheet} from "react-native";
import stylevars from "_STYLES/stylevars";

const styles = StyleSheet.create({
    page: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    header: {
        width: "100%",
        aspectRatio: 1.3,
        marginBottom: 10,
    },
    headerImage: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
    },
    headerOverlay: {
        height: "100%",
        width: "100%",
        zIndex: 1,
        position: "absolute",
        top: 0,
    },
    section: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    sectionHeader: {
        width: "30%",
        color: stylevars.titleColor,
        fontWeight: "bold",
        fontSize: 20,
        textTransform: "uppercase",
        marginLeft: 10,
    },
    sectionTextContainer: {
        width: "60%",
    },
    sectionText: {
        color: stylevars.textColor,
        marginRight: 5,
        marginBottom: 15,
    },
});

export default styles;
