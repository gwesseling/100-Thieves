import React, {ReactNode} from "react";
import {View} from "react-native";
import Router from "_COMPONENTS/entrypoints/Router";
import Topbar from "_SHARED/Topbar";
import useMain from "_HOOKS/main";
import Drawer, {DrawerItem} from "_COMPONENTS/Drawer";
import DrawerProvider from "_COMPONENTS/providers/drawer";
import {NavigationContainer} from "@react-navigation/native";

// TODO: more drawer with content to component
/**
 * Main entrypoint for the application
 */
function Main(): ReactNode {
    useMain();

    return (
        <View style={{flex: 1}}>
            <DrawerProvider>
                <Router />
                <Drawer>
                    <DrawerItem title="Home" />
                    <DrawerItem title="About" />
                    <DrawerItem title="Teams" />
                    <DrawerItem title="Creators" />
                    <DrawerItem title="Players" />
                </Drawer>
            </DrawerProvider>
        </View>
    );
}

export default Main;
