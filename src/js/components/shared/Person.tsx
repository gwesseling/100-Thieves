import React from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import personStyle from "_STYLES/components/person";

type Props = {
    cover: string;
    name: string;
    tag: string;
    style?: {
        containerStyle: Record<string, string | number>;
        imageStyle: Record<string, string | number>;
        nameStyle: Record<string, string | number>;
        tagStyle: Record<string, string | number>;
    };
    onPress: () => void;
};

/**
 * Person component
 */
export default function Person({cover, name, tag, style = {}, onPress = null}: Props) {
    const {containerStyle, imageStyle, nameStyle, tagStyle} = style;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[personStyle.person, containerStyle]}>
                <Image style={[personStyle.personImage, imageStyle]} source={cover} />
                <Text style={[personStyle.personName, nameStyle]}>{name}</Text>
                {tag ? <Text style={[personStyle.personTag, tagStyle]}>{tag}</Text> : null}
            </View>
        </TouchableWithoutFeedback>
    );
}
