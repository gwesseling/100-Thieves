import React, {ReactNode} from "react";
import {View} from "react-native";
import Router from "_COMPONENTS/entrypoints/Router";
import Topbar from "_SHARED/Topbar";
import useMain from "_HOOKS/main";

/**
 * Main entrypoint for the application
 */
function Main(): ReactNode {
    useMain();

    return (
        <View style={{flex: 1}}>
            <Router />
        </View>
    );
}

export default Main;
