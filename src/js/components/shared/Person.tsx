import React, {ReactNode} from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import personStyle from "_STYLES/components/person";

interface Props {
    cover: string;
    name: string;
    tag: string;
    styles?: {
        containerStyle: Record<string, string | number>;
        imageStyle: Record<string, string | number>;
        nameStyle: Record<string, string | number>;
        tagStyle: Record<string, string | number>;
    };
    onPress: () => void;
}

/**
 * Person component
 */
function Person(props: Props): ReactNode {
    const {cover, name, tag, styles = {}, onPress = null} = props;
    const {containerStyle, imageStyle, nameStyle, tagStyle} = styles;

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

export default Person;
