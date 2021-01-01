import React from "react";
import {View} from "react-native";
import Router from "_COMPONENTS/entrypoints/Router";
import Topbar from "_SHARED/Topbar";
import useMain from "_HOOKS/main";
import styles from "_STYLES/general";

/**
 * Main entrypoint for the application
 */
export default function Main() {
    useMain();

    return (
        <View style={styles.flex}>
            <Router />
        </View>
    );
}

export default Main;
