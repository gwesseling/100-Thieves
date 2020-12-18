import React from "react";
import {ScrollView} from "react-native";
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import styles from "_STYLES/general";
import stylevars from "_STYLES/stylevars";
import {ROUTES} from "_ENUMS/routes";

/**
 * Drawer
 */
function Drawer(props) {
    const {navigation, state} = props;
    const {routeNames, index} = state;

    return (
        <DrawerContentScrollView style={styles.drawer}>
            {ROUTES.map(({title, isHidden}, i) => {
                if (!isHidden) {
                    return (
                        <DrawerItem
                            labelStyle={styles.drawerLabel}
                            label={title}
                            focused={routeNames[index] == title}
                            inactiveTintColor={stylevars.textColor}
                            activeTintColor={stylevars.secondaryColor}
                            activeBackgroundColor={"transparent"}
                            onPress={() => navigation.navigate(title)}
                            key={i}
                        />
                    );
                }
            })}
        </DrawerContentScrollView>
    );
}

export default Drawer;