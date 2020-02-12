import React, {ReactNode, Fragment} from 'react';
import {View,Text, Image} from 'react-native';
import style from '_STYLES/pages/teams';
import {teamsMock} from '_COMPONENTS/mocks/teamsMock';
import Topbar from '_SHARED/Topbar';
import Content from '_SHARED/Content';

function Teams(): ReactNode { 
    return (
        <Fragment>
            <Topbar />
            <Content title="Teams">
                {teamsMock.map(({name, cover}, i) => {
                    let black = i % 2 != 0 ? style.cardOverlayBlack : {};

                    return (
                        <View style={style.card} key={i}>
                            <Image style={style.cardImage} source={cover} />
                            <View style={[style.cardOverlay, black]} />
                            <Text style={style.cardText}>{name}</Text>
                        </View>
                    );
                })}
            </Content>
        </Fragment>
    );
}

export default Teams;