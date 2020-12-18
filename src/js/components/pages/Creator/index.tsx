// TODO: split up component
/* eslint-disable max-lines-per-function */
import React, {ReactNode, Fragment} from "react";
import {View, Text, Image, Dimensions} from "react-native";
import {useRoute} from "@react-navigation/native";
import {decodeHTML} from "entities";
import styles from "_STYLES/pages/creator";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import Person from "_SHARED/Person";
import Carousel from "_SHARED/Carousel";
import SocialMedia from "_COMPONENTS/SocialMedia";
import Video from "_COMPONENTS/Video";
import Stat from "_COMPONENTS/Stat";
import {openLink} from "_LIBS/linking";
import About from "_SHARED/About";

import useCreator from "./containerHook";
import useCreatorVideos from "./hooks/creatorVideos";
import useCreatorStats from "./hooks/creatorStats";

// TODO: section and formatNumber component.
/**
 * Creator component
 */
function Creator(): ReactNode {
    const {params} = useRoute();
    const {name, tag, cover, about, links, channelID} = useCreator(params?.id, 15);
    const {videos} = useCreatorVideos(channelID);
    const {subscriberCount = 0, videoCount = 0, viewCount = 0} = useCreatorStats(channelID);

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
                    <Stat title="Subscribers" animation value={subscriberCount} />
                    <Stat title="Videos" animation value={videoCount} deci={1} />
                    <Stat title="Views" animation value={viewCount} />
                </View>
                {about ? <About content={about} /> : null}

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
                ) : null}
            </Content>
        </Fragment>
    );
}

export default Creator;
