import React, {ReactNode, Fragment} from "react";
import {useNavigation} from "@react-navigation/native";
import {View, Text, Image} from "react-native";
import style from "_STYLES/pages/teams";
import {teamsMock} from "_COMPONENTS/mocks/teamsMock";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import TeamCard from "_COMPONENTS/TeamCard";

/**
 * Teams page
 */
function Teams(): ReactNode {
    const {navigate} = useNavigation();

    return (
        <Fragment>
            <Topbar />
            <Content title="Teams">
                {teamsMock.map(({id, name, cover}, i) => {
                    const black = i % 2 != 0 ? style.cardOverlayBlack : null;

                    return (
                        <TeamCard
                            key={i}
                            name={name}
                            cover={cover}
                            overlayStyle={black}
                            onPress={() => navigate("Team", {id})}
                        />
                    );
                })}
            </Content>
        </Fragment>
    );
}

export default Teams;
