import React, {ReactNode, Fragment} from "react";
import {View, Text, Image, Dimensions} from "react-native";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import {teamsMock} from "_COMPONENTS/mocks/teamsMock";
import teamsStyle from "_STYLES/pages/teams";
import TeamCard from "_COMPONENTS/TeamCard";
import Carousel from "_SHARED/Carousel";
import Person from "_SHARED/Person";
import Game from "_SHARED/Game";
import About from "_SHARED/About";

/**
 * Team component
 */
export default function Team(): ReactNode {
    const {name, about, cover, players, games} = teamsMock[0];
    const {width} = Dimensions.get("window");
    const gameWidth = (width / 100) * 80;

    return (
        <Fragment>
            <Topbar />
            <Content style={{paddingRight: 0}}>
                <TeamCard name={name} cover={cover} cardStyle={{aspectRatio: 2, paddingRight: 15}} />

                {about ? <About content={about} /> : null}

                <Carousel
                    title={"Players"}
                    data={players}
                    renderItem={({item, index}) => (
                        <Person
                            styles={{containerStyle: {padding: 10}, imageStyle: {
                                height: 95,
                                width: 95,
                            }}}
                            name={item.name}
                            tag={item?.tag}
                            cover={item.cover}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    snapToAlignment={"start"}
                    snapToInterval={135}
                    decelerationRate={"fast"}
                />
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
            </Content>
        </Fragment>
    );
}
