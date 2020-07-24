import React, {ReactNode, Fragment, useState} from "react";
import {useWindowDimensions, View, Text, Image, ScrollView, FlatList} from "react-native";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import Card from "_COMPONENTS/Card";
import {itemMock} from "_COMPONENTS/mocks/homeMock";

/**
 * Home page
 */
function Home(props): ReactNode {
    const [selected, setSelected] = useState<number>(0);
    const {height, width} = useWindowDimensions();

    /**
     * Test
     */
    function test({nativeEvent}) {
        const test = Math.floor(nativeEvent.contentOffset.y / height);
        setSelected(test);
    }

    return (
        <Fragment>
            <Content style={{paddingTop: 0, paddingLeft: 0, paddingRight: 0}} withoutScrollView>
                <Topbar float />
                <FlatList
                    snapToAlignment={"start"}
                    snapToInterval={height}
                    decelerationRate={"fast"}
                    showsVerticalScrollIndicator={false}
                    onMomentumScrollEnd={test}
                    data={itemMock}
                    renderItem={({item, index}) => (
                        <Card
                            height={height}
                            title={item.title}
                            description={item.description}
                            video={item.video}
                            cover={item.cover}
                            isActive={selected === index}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </Content>
        </Fragment>
    );
}

export default Home;
