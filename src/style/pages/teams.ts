import {StyleSheet} from "react-native";
import stylevars from "_STYLES/stylevars";

const styles = StyleSheet.create({
    card: {
        width: "100%",
        aspectRatio: 2.5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },
    cardImage: {
        height: "100%",
        width: "100%",
        borderRadius: 10,
        resizeMode: "cover",
    },
    cardOverlay: {
        height: "100%",
        width: "100%",
        backgroundColor: stylevars.secondaryColor,
        position: "absolute",
        opacity: 0.6,
        borderRadius: 10,
        left: 0,
    },
    cardOverlayBlack: {
        backgroundColor: stylevars.primaryColor,
        opacity: 0.6,
    },
    cardText: {
        color: stylevars.textColor,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 20,
        position: "absolute",
        textAlign: "center",
    },
    player: {
        padding: 10,
    },
    playerImage: {
        height: 95,
        width: 95,
    },
    tournamentCarousel: {
        marginBottom: 25,
    },
    tournamentTitle: {
        marginBottom: 15,
        fontSize: 18,
    },
});

export default styles;
