// @flow
import React, {ReactNode} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import general from '../../../style/general';
import style from '../../../style/pages/players';
import Section from '../shared/Section';
import {leaguePlayersMock} from '../mocks/playersMock';
import Person from '../shared/Person';

function Players(): ReactNode {
    return (
        <View style={general.pageContainer}>
            <Section 
                title="LEAGUE OF LEGENDS"
                data={leaguePlayersMock}
                renderItem={({item, index}) =>
                    <Person
                        style={style.player}
                        imageStyle={style.playerImage}
                        name={item.name}
                        tag={item.tag}
                        cover={item.cover}
                    />
                }
                keyExtractor={item => item.id}
                snapToAlignment={"start"}
                snapToInterval={135}
                decelerationRate={"fast"}
            />
            <Section 
                title="COUNTER STRIKE: GLOBALE OFFENSIVE"
                data={leaguePlayersMock}
                renderItem={({item, index}) =>
                    <Person
                        style={style.player}
                        imageStyle={style.playerImage}
                        name={'test'}
                        tag={'test'}
                        cover={item.cover}
                    />
                }
                keyExtractor={item => item.id}
                snapToAlignment={"start"}
                snapToInterval={135}
                decelerationRate={"fast"}
            />
            <Section 
                title="FORTNITE"
                data={leaguePlayersMock}
                renderItem={({item, index}) =>
                    <Person
                        style={style.player}
                        imageStyle={style.playerImage}
                        name={'test'}
                        tag={'test'}
                        cover={item.cover}
                    />
                }
                keyExtractor={item => item.id}
                snapToAlignment={"start"}
                snapToInterval={135}
                decelerationRate={"fast"}
            />
            <Section 
                title="LEAGUE OF LEGENDS ACADEMY"
                data={leaguePlayersMock}
                renderItem={({item, index}) =>
                    <Person
                        style={style.player}
                        imageStyle={style.playerImage}
                        name={'test'}
                        tag={'test'}
                        cover={item.cover}
                    />
                }
                keyExtractor={item => item.id}
                snapToAlignment={"start"}
                snapToInterval={135}
                decelerationRate={"fast"}
            />
        </View>
    );
}

export default Players;