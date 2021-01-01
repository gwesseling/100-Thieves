import {StyleSheet} from "react-native";
import stylevars from "_STYLES/stylevars";

const styles = StyleSheet.create({
    pageContainer: {
        paddingRight: 0,
    },
    creator: {
        marginBottom: 0,
    },
    creatorName: {
        fontSize: 20,
        marginBottom: 5,
    },
    creatorImage: {
        height: 150,
        width: 150,
        marginBottom: 5,
    },
    statsContainer: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 25,
        paddingRight: 15,
    },
    stat: {
        flex: 1,
        alignItems: "center",
    },
    statValue: {
        color: stylevars.titleColor,
        fontSize: 16,
        fontWeight: "bold",
    },
    statTitle: {
        color: stylevars.textColor,
    },
    aboutContainer: {
        paddingRight: 15,
    },
    aboutTitle: {
        color: stylevars.titleColor,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    aboutText: {
        color: stylevars.textColor,
        fontSize: 14,
        lineHeight: 18,
        marginBottom: 25,
    },
    linkContainer: {
        marginBottom: 25,
    },
    videosContainer: {
        marginBottom: 25,
    },
    videosTitle: {
        marginBottom: 15,
        fontSize: 18,
    },
});

export default styles;
