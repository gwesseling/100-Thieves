import React, {ReactNode} from "react";
import {View, Text, Image} from "react-native";
import style from "_STYLES/pages/teams";

interface Props {
    name: string;
    cover: string;
    cardStyle: string;
    overlayStyle: string;
}

/**
 * Team card
 */
export default function TeamCard({name, cover, cardStyle, overlayStyle}: Props) {
    return (
        <View style={[style.card, cardStyle]}>
            <Image style={style.cardImage} source={cover} />
            <View style={[style.cardOverlay, overlayStyle]} />
            <Text style={style.cardText}>{name}</Text>
        </View>
    );
}
