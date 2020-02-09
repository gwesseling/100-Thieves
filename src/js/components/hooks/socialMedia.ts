import {View, Text, TouchableNativeFeedback, Linking} from 'react-native';
import {faLink} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faYoutube, faInstagram, faTwitch, faFacebookF, faDiscord} from '@fortawesome/free-brands-svg-icons';

export enum SOCIAL_MEDIA_TYPES {
    twitter,
    youtube,
    instagram,
    twitch,
    facebook,
    discord,
    website,
}

export default function useSocialMedia() {

    const getIconStyle = (type) => {
        // TODO: maybe move to json file?
        switch(type) {
            case SOCIAL_MEDIA_TYPES.twitter:
                return {color: '#1DA1F2', icon: faTwitter};
            case SOCIAL_MEDIA_TYPES.youtube:
                return {color: '#FF3333', icon: faYoutube};
            case SOCIAL_MEDIA_TYPES.instagram:
                return {color: 'white', icon: faInstagram};
            case SOCIAL_MEDIA_TYPES.twitch:
                return {color: '#9147FF', icon: faTwitch};
            case SOCIAL_MEDIA_TYPES.facebook:
                return {color: '#2D4474', icon: faFacebookF};
            case SOCIAL_MEDIA_TYPES.discord:
                return {color: '#7289DA', icon: faDiscord};
            case SOCIAL_MEDIA_TYPES.link:
                return {color: 'white', icon: faLink};
        }
    }

    const openLink = (link: string) => {
        Linking.openURL(link).catch(() => {
            // TODO: throw toast/ notification
        });
    }

    return {
        getIconStyle,
        openLink
    }
}