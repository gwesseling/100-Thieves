import React, {ReactNode, Fragment} from "react";
import {View, Text, Image, Dimensions} from "react-native";
import {useRoute} from "@react-navigation/native";
import styles from "_STYLES/pages/creator";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import Person from "_SHARED/Person";
import Video from "_COMPONENTS/Video";
import About from "_SHARED/About";
import Stats from "_COMPONENTS/creator/Stats";
import SocialMediaList from "_SHARED/SocialMediaList";

import CreatorVideos from "_COMPONENTS/creator/Videos";

import useCreator from "./containerHook";
import useCreatorVideos from "_HOOKS/creatorVideos";
import useCreatorStats from "_HOOKS/creatorStats";

const LIST_STYLE = {containerStyle: styles.linkContainer};

const CREATOR_STYLE = {
    containerStyle: styles.creator,
    nameStyle: styles.creatorName,
    imageStyle: styles.creatorImage,
};

/**
 * Creator component
 */
function Creator(): ReactNode {
    const {params} = useRoute();
    const {name, tag, cover, about, links, channelID} = useCreator(params?.id, 15);
    const {videos} = useCreatorVideos(channelID);
    const {stats} = useCreatorStats(channelID);

    return (
        <Fragment>
            <Topbar />
            <Content style={styles.pageContainer}>
                <Person style={CREATOR_STYLE} name={name} tag={tag} cover={cover} />

                {stats ? <Stats stats={stats} /> : null}

                {about ? <About content={about} /> : null}

                {links ? <SocialMediaList style={LIST_STYLE} links={links} /> : null}

                {videos ? <CreatorVideos videos={videos} /> : null}
            </Content>
        </Fragment>
    );
}

export default Creator;
