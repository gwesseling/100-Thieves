import React, {ReactNode, Fragment} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from '_STYLES/pages/players';
import Carousel from '_SHARED/Carousel';
import {leaguePlayersMock, csPlayersMock, fortnitePlayersMock, lolaPlayersMock} from '_COMPONENTS/mocks/playersMock';
import Person from '_SHARED/Person';
import Topbar from '_SHARED/Topbar';
import Content from '_SHARED/Content';

function Players(): ReactNode {
    return (
        <Fragment>
            <Topbar />
            <Content style={styles.players}>
                <Carousel 
                    title="LEAGUE OF LEGENDS"
                    data={leaguePlayersMock}
                    renderItem={({item, index}) =>
                        <Person
                            styles={{containerStyle: styles.player}}
                            imageStyle={styles.playerImage}
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
                <Carousel 
                    title="COUNTER STRIKE: GLOBALE OFFENSIVE"
                    data={csPlayersMock}
                    renderItem={({item, index}) =>
                        <Person
                            styles={{containerStyle: styles.player}}
                            imageStyle={styles.playerImage}
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
                <Carousel 
                    title="FORTNITE"
                    data={fortnitePlayersMock}
                    renderItem={({item, index}) =>
                        <Person
                            styles={{containerStyle: styles.player}}
                            imageStyle={styles.playerImage}
                            name={item.name}
                            cover={item.cover}
                        />
                    }
                    keyExtractor={item => item.id}
                    snapToAlignment={"start"}
                    snapToInterval={135}
                    decelerationRate={"fast"}
                />
                <Carousel 
                    title="LEAGUE OF LEGENDS ACADEMY"
                    data={lolaPlayersMock}
                    renderItem={({item, index}) =>
                        <Person
                            styles={{containerStyle: styles.player}}
                            imageStyle={styles.playerImage}
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