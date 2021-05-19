import React from "react";
import {Dimensions} from "react-native";
import {decodeHTML} from "entities";
import Carousel from "_SHARED/Carousel";
import Video from "_COMPONENTS/Video";
import {openLink} from "_LIBS/linking";
import {VideoType} from "_HOOKS/creatorVideos";
import styles from "_STYLES/pages/creator";

type Props = {
    videos: [VideoType];
};

const VIDEOS_STYLE = {
    containerStyle: styles.videosContainer,
    titleStyle: styles.videosTitle,
};

/**
 * Videos
 */
export default function Videos({videos}: Props) {
    const {width} = Dimensions.get("window");
    const videoWidth = width < 480 ? (width / 100) * 80 : (width / 100) * 33;

    return (
        <Carousel
            style={VIDEOS_STYLE}
            title="Last videos"
            data={videos}
            renderItem={({item}) => {
                const {snippet, id} = item;

                return (
                    <Video
                        style={{width: videoWidth, height: (videoWidth / 16) * 9}}
                        title={decodeHTML(snippet.title)}
                        cover={snippet.thumbnails.high.url}
                        onPress={() => openLink(`https://www.youtube.com/watch?v=${id.videoId}`)}
                    />
                );
            }}
            keyExtractor={(item) => item.id.videoId}
            snapToAlignment={"start"}
            snapToInterval={videoWidth + 15}
            decelerationRate={"fast"}
        />
    );
}
