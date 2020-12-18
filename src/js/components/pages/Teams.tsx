import React, {ReactNode, Fragment} from "react";
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
    return (
        <Fragment>
            <Topbar />
            <Content title="Teams">
                {teamsMock.map(({name, cover}, i) => {
                    const black = i % 2 != 0 ? style.cardOverlayBlack : null;

                    return <TeamCard key={i} name={name} cover={cover} overlayStyle={black} />;
                })}
            </Content>
        </Fragment>
    );
}

export default Teams;
