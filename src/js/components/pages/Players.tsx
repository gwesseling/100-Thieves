import React, {ReactNode, Fragment} from "react";
import {View, Text, Image, FlatList} from "react-native";
import {useNavigation} from "@react-navigation/native";
import styles from "_STYLES/pages/players";
import Carousel from "_SHARED/Carousel";
import Person from "_SHARED/Person";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import {teamsMock} from "_COMPONENTS/mocks/teamsMock";

interface Player {
    id: string;
    name: string;
    tag?: string;
    cover: string;
}

/**
 * Players page
 */
function Players(): ReactNode {
    const {navigate} = useNavigation();

    /**
     * Render player
     */
    function renderPlayer({item}: Player) {
        return (
            <Person
                styles={{containerStyle: styles.player}}
                imageStyle={styles.playerImage}
                name={item.name}
                tag={item?.tag}
                cover={item.cover}
                onPress={() => navigate("Player", {id: item.id})}
            />
        );
    }

    return (
        <Fragment>
            <Topbar />
            <Content style={styles.players}>
                {teamsMock.map(({name, players}, i) => (
                    <Carousel
                        key={i}
                        title={name.toUpperCase()}
                        data={players}
                        renderItem={renderPlayer}
                        keyExtractor={(item) => item.id}
                        snapToAlignment={"start"}
                        snapToInterval={135}
                        decelerationRate={"fast"}
                    />
                ))}
            </Content>
        </Fragment>
    );
}

export default Players;
