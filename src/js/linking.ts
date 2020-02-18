import {Linking} from 'react-native';

export const openLink = (link: string) => {
    if (link) {
        Linking.openURL(link).catch(() => {
            // TODO: throw toast/ notification
        });
    }
}
