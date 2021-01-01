import React, {Fragment} from "react";
import {View, Text, Image, Dimensions} from "react-native";
import {useRoute} from "@react-navigation/native";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import {teamsMock} from "_COMPONENTS/mocks/teamsMock";
import teamsStyle from "_STYLES/pages/teams";
import TeamCard from "_COMPONENTS/TeamCard";
import Carousel from "_SHARED/Carousel";
import Person from "_SHARED/Person";
import Game from "_SHARED/Game";
import About from "_SHARED/About";
import Players from "_COMPONENTS/teams/Players";
import Tournaments from "_COMPONENTS/teams/Tournaments";
import styles from "_STYLES/general";

/**
 * Team component
 */
export default function Team() {
    const {params} = useRoute();
    const {name, about, cover, players, tournaments, games} = teamsMock[params?.id];

    return (
        <Fragment>
            <Topbar />
            <Content style={styles.pageWithOutPadding}>
                <TeamCard name={name} cover={cover} cardStyle={{aspectRatio: 2.25, paddingRight: 15}} />

                {about ? <About content={about} /> : null}

                {players ? <Players players={players} /> : null}

                {tournaments ? <Tournaments tournaments={tournaments} /> : null}
            </Content>
        </Fragment>
    );
}
