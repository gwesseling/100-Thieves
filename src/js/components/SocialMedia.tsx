import React, {ReactNode} from "react";
import {View, Text, TouchableNativeFeedback} from "react-native";
import useSocialMedia, {SOCIAL_MEDIA_TYPES} from "_HOOKS/socialMedia";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {openLink} from "_LIBS/linking";

interface Props {
    title: string;
    tag?: string;
    type: SOCIAL_MEDIA_TYPES;
    link: string;
}

// TODO: add verify check?
/**
 * Social media component
 */
function SocialMedia(props: Props): ReactNode {
    const {title, tag, type, link} = props;
    const {getIconStyle} = useSocialMedia();
    const {icon, color} = getIconStyle(type);

    /**
     * Handle opening of link
     */
    function handleLink() {
        openLink(link);
    }

    return (
        <TouchableNativeFeedback style={{minWidth: 150}} onPress={handleLink}>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    borderRadius: 5,
                    alignItems: "center",
                    marginRight: 15,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 15,
                    paddingRight: 15,
                    backgroundColor: "#242729",
                }}
            >
                <FontAwesomeIcon style={{color: color, marginRight: 10}} icon={icon} size={20} />
                <Text style={{color: "white", fontSize: 14, fontWeight: "bold"}}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}

export default SocialMedia;
