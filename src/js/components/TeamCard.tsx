import React from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import style from "_STYLES/pages/teams";

type Props = {
    name: string;
    cover: string;
    cardStyle: string;
    overlayStyle: string;
    onPress?: () => void;
};

/**
 * Team card
 */
export default function TeamCard({name, cover, cardStyle, overlayStyle, onPress}: Props) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[style.card, cardStyle]}>
                <Image style={style.cardImage} source={cover} />
                <View style={[style.cardOverlay, overlayStyle]} />
                <Text style={style.cardText}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}
