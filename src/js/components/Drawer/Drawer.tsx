import React, {ReactNode, useContext, Fragment} from "react";
import {Animated, View, TouchableWithoutFeedback} from "react-native";
import styles from "_STYLES/components/drawer";
import stylesvars from "_STYLES/stylevars";
import {DrawerContext} from "_COMPONENTS/providers/drawer";

interface Props {
    children: ReactNode;
}

/**
 * Drawer component
 */
function Drawer(props: Props) {
    const {children} = props;
    const {drawerAnimation, isOpen, closeDrawer} = useContext(DrawerContext);

    const left = drawerAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ["-80%", "0%"],
    });

    return (
        <Fragment>
            <Animated.View style={[styles.drawer, {left}]}>{children}</Animated.View>
            {isOpen && (
                <TouchableWithoutFeedback onPress={closeDrawer}>
                    <Animated.View style={[styles.drawerOverlay, {opacity: drawerAnimation}]} />
                </TouchableWithoutFeedback>
            )}
        </Fragment>
    );
}

export default Drawer;
