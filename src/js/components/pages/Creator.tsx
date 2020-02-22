// TODO: split up component
/* eslint-disable max-lines-per-function */
import React, {ReactNode, Fragment} from "react";
import {View, Text, Image, Dimensions} from "react-native";
import styles from "_STYLES/pages/creator";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import Person from "_SHARED/Person";
import Carousel from "_SHARED/Carousel";
import SocialMedia from "_COMPONENTS/SocialMedia";
import Video from "_COMPONENTS/Video";
import Stat from "_COMPONENTS/Stat";
import {creatorsMock} from "_COMPONENTS/mocks/creatorsMock";
import {openLink} from "_LIBS/linking";
import {useRoute} from "@react-navigation/native";

import useCreatorStats from "_HOOKS/creatorStats";
import useCreatorVideos from "_HOOKS/creatorVideos";

// TODO: section and formatNumber component.
/**
 * Creator component
 */
function Creator(): ReactNode {
    const route = useRoute();
    const id = route.params?.id || 0;
    const {name, tag, cover, about, links, channelID} = creatorsMock[id];
    const {subscriberCount = 0, videoCount = 0, viewCount = 0} = useCreatorStats(channelID);
    const {videos = null} = useCreatorVideos(channelID, 15);

    const {width} = Dimensions.get("window");
    const videoWidth = (width / 100) * 80;

    return (
        <Fragment>
            <Topbar />
            <Content style={styles.pageContainer}>
                <Person
                    styles={{
                        containerStyle: styles.creator,
                        nameStyle: styles.creatorName,
                        imageStyle: styles.creatorImage,
                    }}
                    name={name}
                    tag={tag}
                    cover={cover}
                />
                <View style={styles.statsContainer}>
                    <Stat title="Subscribers" value={subscriberCount} />
                    <Stat title="Videos" value={videoCount} deci={1} />
                    <Stat title="Views" value={viewCount} />
                </View>
                {about ? (
                    <View style={styles.aboutContainer}>
                        <Text style={styles.aboutTitle}>About</Text>
                        {about.map((text, i) => (
                            <Text key={i} style={styles.aboutText}>
                                {text}
                            </Text>
                        ))}
                    </View>
                ) : null}

                <Carousel
                    style={{containerStyle: {marginBottom: 25}}}
                    data={links}
                    renderItem={({item}) => (
                        <SocialMedia title={item.title} tag={item.tag} type={item.type} link={item.link} />
                    )}
                    keyExtractor={(item) => item.id}
                />
                {videos ? (
                    <Carousel
                        style={{
                            containerStyle: {marginBottom: 25},
                            titleStyle: {marginBottom: 15, fontSize: 18},
                        }}
                        title="Last videos"
                        data={videos}
                        renderItem={({item}) => {
                            const {snippet, id} = item;

                            return (
                                <Video
                                    style={{width: videoWidth, height: (videoWidth / 16) * 9}}
                                    title={snippet.title}
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
                ) : null}
            </Content>
        </Fragment>
    );
}

export default Creator;
