// @flow
import React, {ReactNode, Fragment} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import general from '_STYLES/general';
import style from '_STYLES/pages/players';
import Section from '_SHARED/Section';
import {leaguePlayersMock, csPlayersMock, fortnitePlayersMock, lolaPlayersMock} from '_COMPONENTS/mocks/playersMock';
import Person from '_SHARED/Person';
import Topbar from '_SHARED/Topbar';
import Content from '_SHARED/Content';

function Players(): ReactNode {
    return (
        <Fragment>
            <Topbar />
            <Content style={general.pageContainer}>
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
                    data={csPlayersMock}
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
                    title="FORTNITE"
                    data={fortnitePlayersMock}
                    renderItem={({item, index}) =>
                        <Person
                            style={style.player}
                            imageStyle={style.playerImage}
                            name={item.name}
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
                    data={lolaPlayersMock}
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
            </Content>
        </Fragment>
    );
}

export default Players;