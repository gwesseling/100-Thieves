// @flow
import React, {type Node} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import general from '../../../style/general';
import style from '../../../style/pages/players';
import Section from '../shared/Section';
import {leaguePlayersMock} from '../mocks/playersMock';
import Person from '../shared/Person';

function Players(): Node {
    return (
        <View style={general.pageContainer}>
            <Section 
                title="LEAGUE OF LEGENDS"
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
            />
        </View>
    );
}

export default Players;