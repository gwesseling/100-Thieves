import React, {ReactNode} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '_STYLES/components/video';
import stylevars from '_STYLES/stylevars';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
    title: string,
    image: string,
}

function Video(props: Props): ReactNode {
    const {title, cover} = props;

    return (
         <View style={styles.video}>
            <LinearGradient style={styles.videoOverlay} colors={['transparent', stylevars.primaryColor]} locations={[0, 1]} />
            <Image style={styles.videoImage} source={{uri: cover}} />
            <View style={styles.videoContent}>
                <Text style={styles.videoTitle} numberOfLines={2}>{title}</Text>
            </View>
        </View>
    );
}

export default Video;