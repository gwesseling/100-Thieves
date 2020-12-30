import React, {ReactNode} from "react";
import {Dimensions} from "react-native";
import Carousel from "_SHARED/Carousel";
import Game from "_SHARED/Game";

type Props = {
    style: {[index: string]: string | number};
    games: [
        {
            team: string;
            opponent: string;
            stats: {
                kills: number;
                assists: number;
                deaths: number;
            };
        },
    ];
};

/**
 * Games
 */
export default function Games({style, games}: Props): ReactNode {
    const {width} = Dimensions.get("window");
    const gameWidth = (width / 100) * 80;

    return (
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
    );
}
