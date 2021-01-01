import {View, Text, TouchableNativeFeedback} from "react-native";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faYoutube,
    faInstagram,
    faTwitch,
    faFacebookF,
    faDiscord,
    faSnapchatGhost,
} from "@fortawesome/free-brands-svg-icons";
import stylevars from "_STYLES/stylevars";

export enum SOCIAL_MEDIA_TYPES {
    twitter,
    youtube,
    instagram,
    twitch,
    facebook,
    snapchat,
    discord,
    website,
}

const socialMediaResolver = {
    [SOCIAL_MEDIA_TYPES.twitter]: {color: stylevars.twitterColor, icon: faTwitter},
    [SOCIAL_MEDIA_TYPES.youtube]: {color: stylevars.youtubeColor, icon: faYoutube},
    [SOCIAL_MEDIA_TYPES.instagram]: {color: stylevars.instagramColor, icon: faInstagram},
    [SOCIAL_MEDIA_TYPES.twitch]: {color: stylevars.twitchColor, icon: faTwitch},
    [SOCIAL_MEDIA_TYPES.facebook]: {color: stylevars.facebookColor, icon: faFacebookF},
    [SOCIAL_MEDIA_TYPES.discord]: {color: stylevars.discordColor, icon: faDiscord},
    [SOCIAL_MEDIA_TYPES.snapchat]: {color: stylevars.snapchatColor, icon: faSnapchatGhost},
    [SOCIAL_MEDIA_TYPES.link]: {color: stylevars.linkColor, icon: faLink},
};

/**
 * Handle social media methods
 */
export default function useSocialMedia() {
    /**
     * Get social media icon style
     */
    const getIconStyle = (type) => {
        return socialMediaResolver[type];
    };

    return {
        getIconStyle,
    };
}
