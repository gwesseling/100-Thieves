import React, {useState} from "react";
import {Animated, Easing} from "react-native";

/**
 * Handles drawer animation
 */
export default function useDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const [drawerAnimation] = useState(new Animated.Value(0));

    /**
     * Start drawer animation
     */
    const startAnimation = (toValue: number, callback: () => void = null) => {
        Animated.timing(drawerAnimation, {
            toValue,
            duration: 250,
        }).start(callback);
    };

    /**
     * Open drawer
     */
    const openDrawer = () => {
        setIsOpen(true);
        startAnimation(1);
    };

    /**
     * Close drawer
     */
    const closeDrawer = () => {
        startAnimation(0, setIsOpen(false));
    };

    /**
     * Toggle drawer
     */
    const toggleDrawer = () => {
        if (!isOpen) {
            openDrawer();
        } else {
            closeDrawer();
        }
    };

    return {
        drawerAnimation,
        openDrawer,
        closeDrawer,
        toggleDrawer,
        isOpen,
    };
}
