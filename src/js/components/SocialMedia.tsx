import React from "react";
import {View, Text, TouchableNativeFeedback} from "react-native";
import useSocialMedia, {SOCIAL_MEDIA_TYPES} from "_HOOKS/socialMedia";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {openLink} from "_LIBS/linking";
import styles from "_STYLES/components/socialMedia";

type Props = {
    title: string;
    tag?: string;
    type: SOCIAL_MEDIA_TYPES;
    link: string;
};

/**
 * Social media component
 */
export default function SocialMedia({title, tag, type, link}: Props) {
    const {getIconStyle} = useSocialMedia();
    const {icon, color} = getIconStyle(type);

    /**
     * Handle opening of link
     */
    function handleLink() {
        openLink(link);
    }

    return (
        <TouchableNativeFeedback style={styles.container} onPress={handleLink}>
            <View style={styles.content}>
                <FontAwesomeIcon style={[styles.icon, {color}]} icon={icon} size={20} />
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}
