import React, {ReactNode} from 'react';
import {View, Text, Image, TouchableNativeFeedback, Dimensions} from 'react-native';
import styles from '_STYLES/components/video';
import stylevars from '_STYLES/stylevars';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
    title: string,
    image: string,
}

function Video(props: Props): ReactNode {
    const {title, cover, onPress} = props;
    const {width} = Dimensions.get('window');
    const videoWidth = width / 100 * 80;

    return (
         <TouchableNativeFeedback useForeground onPress={onPress}>
            <View style={[styles.video, {width: videoWidth, height: videoWidth / 16 * 9} ]}>
                <LinearGradient style={styles.videoOverlay} colors={['transparent', stylevars.primaryColor]} locations={[0, 1]} />
                <Image style={styles.videoImage} source={{uri: cover}} />
                <View style={styles.videoContent}>
                    <Text style={styles.videoTitle} numberOfLines={2}>{title}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}

export default Video;