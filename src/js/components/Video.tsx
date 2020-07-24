import React, {ReactNode} from "react";
import {View, Text, Image, TouchableNativeFeedback} from "react-native";
import styles from "_STYLES/components/video";
import stylevars from "_STYLES/stylevars";
import LinearGradient from "react-native-linear-gradient";

interface Props {
    style: Record<string, string | number>;
    title: string;
    image: string;
    cover: string;
    onPress: () => void;
}

/**
 * Video
 */
function Video(props: Props): ReactNode {
    const {style = {}, title, cover, onPress} = props;
    // TODO: make devices like ipads contain 3/ 4 videos

    return (
        <TouchableNativeFeedback useForeground onPress={onPress}>
            <View style={[styles.video, style]}>
                <LinearGradient
                    style={styles.videoOverlay}
                    colors={["transparent", stylevars.primaryColor]}
                    locations={[0, 1]}
                />
                <Image style={styles.videoImage} source={{uri: cover}} />
                <View style={styles.videoContent}>
                    <Text style={styles.videoTitle} numberOfLines={2}>
                        {title}
                    </Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}

export default Video;
