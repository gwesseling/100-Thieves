import React, {ReactNode} from 'react';
import {View,Text, Image} from 'react-native';
import general from '../../../style/general';
import style from '../../../style/pages/teams';
import {teamsMock} from '../mocks/teamsMock';

function Teams(): ReactNode {

    // TODO: add mock data
    return (
        <View style={general.pageContainer}>
            <Text style={general.pageTitle}>Teams</Text>
            {teamsMock.map(({name, cover}, i) => {
                let black = i % 2 != 0 ? style.cardOverlayBlack : {};

                return (
                    <View style={style.card} key={i}>
                        <Image style={style.cardImage} source={cover} />
                        <View style={[style.cardOverlay, black]} />
                        <Text style={style.cardText}>{name}</Text>
                    </View>
                );
            }
               
            )}
        </View>
    );
}

export default Teams;