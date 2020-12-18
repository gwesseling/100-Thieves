import React from "react";
import {View, Text} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import Topbar from "_SHARED/Topbar";
import Drawer from "_COMPONENTS/Drawer";
import {ROUTES} from "_ENUMS/routes";

import Home from "_COMPONENTS/pages/Home";
import About from "_COMPONENTS/pages/About";
import Teams from "_COMPONENTS/pages/Teams";
import Creator from "_COMPONENTS/pages/Creator";
import Creators from "_COMPONENTS/pages/Creators";
import Players from "_COMPONENTS/pages/Players";

const DrawerNav = createDrawerNavigator();

// TODO: route animation
/**
 * Router
 */
function Router() {
    /**
     * Render drawer
     */
    function renderDrawer(props) {
        return <Drawer {...props} />;
    }

    return (
        <NavigationContainer>
            <DrawerNav.Navigator
                initialRouteName="Team"
                backBehavior="history"
                drawerContent={renderDrawer}
                overlayColor={"rgba(0, 0, 0, .3)"}
            >
                {ROUTES.map(({title, component}, i) => (
                    <DrawerNav.Screen name={title} component={component} key={i} />
                ))}
            </DrawerNav.Navigator>
        </NavigationContainer>
    );
}

export default Router;
