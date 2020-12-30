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
    [SOCIAL_MEDIA_TYPES.twitter]: {color: "#1DA1F2", icon: faTwitter},
    [SOCIAL_MEDIA_TYPES.youtube]: {color: "#FF3333", icon: faYoutube},
    [SOCIAL_MEDIA_TYPES.instagram]: {color: "white", icon: faInstagram},
    [SOCIAL_MEDIA_TYPES.twitch]: {color: "#9147FF", icon: faTwitch},
    [SOCIAL_MEDIA_TYPES.facebook]: {color: "#2D4474", icon: faFacebookF},
    [SOCIAL_MEDIA_TYPES.discord]: {color: "#7289DA", icon: faDiscord},
    [SOCIAL_MEDIA_TYPES.snapchat]: {color: "#CCCA00", icon: faSnapchatGhost},
    [SOCIAL_MEDIA_TYPES.link]: {color: "white", icon: faLink},
};

type SociaMediaType = {
    color: string;
    icon: string;
};

type ReturnType = {
    getIconStyle: (type: SOCIAL_MEDIA_TYPES) => SociaMediaType;
};

/**
 * Handle social media methods
 */
export default function useSocialMedia(): ReturnType {
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
