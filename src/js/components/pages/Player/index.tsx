/* eslint-disable max-lines-per-function */
import React, {ReactNode, Fragment} from "react";
import {View, Text, Image, Dimensions} from "react-native";
import {useRoute} from "@react-navigation/native";
import styles from "_STYLES/pages/creator";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import Person from "_SHARED/Person";
import {playersMock} from "_COMPONENTS/mocks/playersMock";
import Stat from "_COMPONENTS/Stat";
import Carousel from "_SHARED/Carousel";
import SocialMedia from "_COMPONENTS/SocialMedia";
import Game from "_SHARED/Game";
import About from "_SHARED/About";

import usePlayer from "./containerHook";

const personStyling = {
    containerStyle: styles.creator,
    nameStyle: styles.creatorName,
    imageStyle: styles.creatorImage,
};

/**
 * Player page
 */
function Player(): ReactNode {
    const {params} = useRoute();
    const {name, about, tag, cover, links, stats, games} = usePlayer(params?.id);
    const {width} = Dimensions.get("window");
    const gameWidth = (width / 100) * 80;

    return (
        <Fragment>
            <Topbar />
            <Content style={styles.pageContainer}>
                <Person styles={personStyling} name={name} tag={tag} cover={cover} />
                {stats ? (
                    <View style={styles.statsContainer}>
                        <Stat title="Games played" value={20} />
                        <Stat title="kill" value={64} deci={1} />
                        <Stat title="Deaths" value={15} />
                    </View>
                ) : null}

                {about ? <About content={about} /> : null}

                <Carousel
                    style={{containerStyle: {marginBottom: 25}}}
                    data={links}
                    renderItem={({item}) => (
                        <SocialMedia title={item.title} tag={item.tag} type={item.type} link={item.link} />
                    )}
                    keyExtractor={(item) => item.id}
                />

                {games.length > 0 ? (
                    <Carousel
                        style={{
                            containerStyle: {marginBottom: 25},
                            titleStyle: {marginBottom: 15, fontSize: 18},
                        }}
                        title="Last games"
                        data={games}
                        renderItem={({item}) => (
                            <Game
                                style={{width: gameWidth, height: (gameWidth / 16) * 9}}
                                team={item.team}
                                opponent={item.opponent}
                                stats={item.stats}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        snapToAlignment={"start"}
                        snapToInterval={gameWidth + 15}
                        decelerationRate={"fast"}
                    />
                ) : null}
            </Content>
        </Fragment>
    );
}

export default Player;
