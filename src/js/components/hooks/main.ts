import SplashScreen from "react-native-splash-screen";
import {useState, useEffect} from "react";

/**
 * Hook to handle main
 */
export default function useMain(): void {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
}
