import React, {ReactNode, Fragment} from "react";
import {View, Text, Image, Dimensions} from "react-native";
import {useRoute} from "@react-navigation/native";
import styles from "_STYLES/pages/creator";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import Person from "_SHARED/Person";
import {playersMock} from "_COMPONENTS/mocks/playersMock";
import SocialMedia from "_COMPONENTS/SocialMedia";
import About from "_SHARED/About";
import Stats from "_COMPONENTS/player/Stats";
import SocialMediaList from "_SHARED/SocialMediaList";
import Games from "_COMPONENTS/player/Games";

import usePlayer from "./containerHook";

const PERSON_STYLE = {
    containerStyle: styles.creator,
    nameStyle: styles.creatorName,
    imageStyle: styles.creatorImage,
};

const LIST_STYLE = {containerStyle: styles.linkContainer};

const GAMES_STYLE = {
    containerStyle: styles.gamesContainer,
    titleStyle: style.gamesTitle,
};

/**
 * Player page
 */
function Player(): ReactNode {
    const {params} = useRoute();
    const {name, about, tag, cover, links, stats, games} = usePlayer(params?.id);

    return (
        <Fragment>
            <Topbar />
            <Content style={styles.pageContainer}>
                <Person style={PERSON_STYLE} name={name} tag={tag} cover={cover} />
                {stats ? <Stats /> : null}

                {about ? <About content={about} /> : null}

                {links ? <SocialMediaList style={LIST_STYLE} links={links} /> : null}

                {games ? <Games style={GAMES_STYLE} games={games} /> : null}
            </Content>
        </Fragment>
    );
}

export default Player;
