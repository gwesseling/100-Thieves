import React, {ReactNode, useContext} from "react";
import {View, Text} from "react-native";
import styles from "_STYLES/components/drawer";
import {useNavigation} from "@react-navigation/native";
import {NavigationContext} from "react-navigation";

interface Props {
    title: string;
}

/**
 * Drawer item component
 */
function DrawerItem(props: Props): ReactNode {
    const {title} = props;

    return (
        <View style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>{title}</Text>
        </View>
    );
}

export default DrawerItem;
