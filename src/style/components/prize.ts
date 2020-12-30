import {StyleSheet} from "react-native";
import stylevars from "_STYLES/stylevars";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        height: 275,
        width: 180,
        borderRadius: 15,
        backgroundColor: stylevars.lightRed,
        marginRight: 15
    },
    header: {
        flex: 1,
        width: "100%",
        justifyContent: "center"
    },
    headerImage: {
        height: 50,
        width: "100%",
        marginBottom: 10
    },
    content: {
        alignItems: "center",
        padding: 15,
        backgroundColor: stylevars.grey,
        borderRadius: 10,
        justifyContent: "center",
        width: '100%'
    },
    title: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: 10,
        textAlign: "center",
    },
    description: {
        color: stylevars.darkerTextColor, 
        textAlign: "center", 
        marginBottom: 10
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    divider: {
        borderTopWidth: 1, 
        borderColor: stylevars.secondaryColor, 
        width: 30, 
        marginTop: 10
    },
    placement: {
        paddingLeft: 5,
        paddingRight: 5,
        color: "#E11E27",
        textTransform: "uppercase"
    }
});

export default styles;
