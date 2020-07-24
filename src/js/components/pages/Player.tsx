/* eslint-disable max-lines-per-function */
import React, {ReactNode, Fragment} from "react";
import {View, Text, Image, Dimensions} from "react-native";
import styles from "_STYLES/pages/creator";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import Person from "_SHARED/Person";
import {playersMock} from "_COMPONENTS/mocks/playersMock";
import Stat from "_COMPONENTS/Stat";
import Carousel from "_SHARED/Carousel";
import SocialMedia from "_COMPONENTS/SocialMedia";
import Game from "_SHARED/Game";

/**
 * Player page
 */
function Player(): ReactNode {
    const {name, tag, cover, links} = playersMock[0];

    const {width} = Dimensions.get("window");
    const videoWidth = (width / 100) * 80;

    return (
        <Fragment>
            <Topbar />
            <Content>
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
                    <Stat title="Games played" value={0} />
                    <Stat title="kill" value={0} deci={1} />
                    <Stat title="Deaths" value={0} />
                </View>
                <Carousel
                    style={{containerStyle: {marginBottom: 25}}}
                    data={links}
                    renderItem={({item}) => (
                        <SocialMedia title={item.title} tag={item.tag} type={item.type} link={item.link} />
                    )}
                    keyExtractor={(item) => item.id}
                />
                <Carousel
                    style={{
                        containerStyle: {marginBottom: 25},
                        titleStyle: {marginBottom: 15, fontSize: 18},
                    }}
                    title="Last games"
                    data={[
                        {
                            id: "0",
                            team: "https://cdn.pandascore.co/images/team/image/125738/dignitas-fe.png",
                            opponent: "https://cdn.pandascore.co/images/team/image/125745/carnage-fe.png",
                            stats: {
                                kills: 1,
                                assists: 1,
                                deaths: 0,
                            },
                        },
                    ]}
                    renderItem={({item}) => (
                        <Game
                            style={{width: videoWidth, height: (videoWidth / 16) * 9}}
                            team={item.team}
                            opponent={item.opponent}
                            stats={item.stats}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    snapToAlignment={"start"}
                    // snapToInterval={videoWidth + 15}
                    decelerationRate={"fast"}
                />
            </Content>
        </Fragment>
    );
}

export default Player;
