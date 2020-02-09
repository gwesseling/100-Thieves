import React, {ReactNode} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import useSocialMedia, {SOCIAL_MEDIA_TYPES} from '_HOOKS/socialMedia';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

type Props = {
    name: string,
    tag?: string,
    type: SOCIAL_MEDIA_TYPES,
}

function SocialMedia(props: Props): ReactNode {
    const {title, tag, type, link} = props;
    const {getIconStyle, openLink} = useSocialMedia();
    const {icon, color} = getIconStyle(type);

    return (
        <TouchableNativeFeedback 
            style={{minWidth: 150}}
            onPress={() => openLink(link)}
        >
            <View style={{flex: 1, flexDirection: 'row', borderRadius: 5, alignItems: 'center', marginRight: 15, paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, backgroundColor: '#242729'}}>
                <FontAwesomeIcon style={{color: color, marginRight: 10}} icon={icon} size={20} />
                <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}

export default SocialMedia;