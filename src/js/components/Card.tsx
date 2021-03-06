import React, {useEffect} from "react";
import {View, Text, Image, Animated} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import stylevars from "_STYLES/stylevars";
import Video from "react-native-video";
import styles from "_STYLES/components/card";

type Props = {
    height: number;
    style: Record<string, string | number>;
    isActive: boolean;
    title: string;
    description: string;
    cover?: string;
    poster?: string;
    video?: string;
};

/**
 * Card Component
 */
export default function Card(props: Props) {
    const {height, isActive, title, cover, poster = "", video, description, style = {}} = props;

    return (
        <View style={[styles.card, style]}>
            {video ? (
                <Video
                    source={{uri: video}}
                    paused={!isActive}
                    muted
                    disableFocus
                    repeat
                    resizeMode="cover"
                    style={{height, width: "100%"}}
                />
            ) : null}

            {cover ? <Image style={{height, width: "100%"}} source={{uri: cover}} resizeMode="cover" /> : null}

            <LinearGradient
                style={[{height}, styles.cardOverlay]}
                colors={["transparent", stylevars.primaryColor]}
                locations={[0, 1]}
            />

            <Animated.View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
            </Animated.View>
        </View>
    );
}
