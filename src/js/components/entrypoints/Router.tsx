import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Topbar from "_SHARED/Topbar";

import Home from "_COMPONENTS/pages/Home";
import About from "_COMPONENTS/pages/About";
import Teams from "_COMPONENTS/pages/Teams";
import Creator from "_COMPONENTS/pages/Creator";
import Creators from "_COMPONENTS/pages/Creators";
import Players from "_COMPONENTS/pages/Players";

const Stack = createStackNavigator();

/**
 * Router
 */
function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Creators" headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Teams" component={Teams} />
                <Stack.Screen name="Creators" component={Creators} />
                <Stack.Screen name="Players" component={Players} />
                <Stack.Screen name="Creator" component={Creator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
