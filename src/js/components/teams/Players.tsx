import React from "react";
import {useNavigation} from "@react-navigation/native";
import Carousel from "_SHARED/Carousel";
import Person from "_SHARED/Person";
import styles from "_STYLES/pages/teams";

type Player = {
    id: string;
    name: string;
    tag?: string;
    cover: string;
};

type Props = {
    players: [Player];
};

const personStyle = {
    containerStyle: styles.player,
    imageStyle: styles.playerImage,
};

/**
 * Team players
 */
export default function Players({players}: Props) {
    const {navigate} = useNavigation();

    /**
     * Render players
     */
    function renderPerson({item}: Player) {
        return (
            <Person
                style={personStyle}
                name={item.name}
                tag={item?.tag}
                cover={item.cover}
                onPress={() => navigate("Player", {id: item.id})}
            />
        );
    }

    return (
        <Carousel
            title={"Players"}
            data={players}
            renderItem={renderPerson}
            keyExtractor={(item) => item.id}
            snapToAlignment={"start"}
            snapToInterval={115}
            decelerationRate={"fast"}
        />
    );
}
