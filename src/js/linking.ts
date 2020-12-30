import {Linking} from "react-native";

/**
 * Open link
 */
export const openLink = (link: string): void => {
    if (link) {
        Linking.openURL(link).catch(() => {
            // TODO: throw toast/ notificati;on
        });
    }
};
