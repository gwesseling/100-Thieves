import React from "react";
import {SafeAreaView, StatusBar} from "react-native";
import styles from "_STYLES/general";
import stylevars from "_STYLES/stylevars";
import Main from "_COMPONENTS/entrypoints/Main";

/**
 * App entrypoint
 */
export default function App() {
    return (
        <SafeAreaView style={styles.flex}>
            <StatusBar translucent backgroundColor={stylevars.statusBarColor} />
            <Main />
        </SafeAreaView>
    );
}
