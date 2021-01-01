import React, {Fragment, useState} from "react";
import {useWindowDimensions, View, Text, Image, ScrollView, FlatList} from "react-native";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import Card from "_COMPONENTS/Card";
import {itemMock} from "_COMPONENTS/mocks/homeMock";
import useHome from "./containerHook";
import styles from "_STYLES/pages/home";

/**
 * Home page
 */
export default function Home() {
    const {selected, onScrollEnd} = useHome();
    const {height, width} = useWindowDimensions();

    return (
        <Content style={styles.container} withoutScrollView>
            <Topbar float />
            <FlatList
                snapToAlignment={"start"}
                snapToInterval={height}
                decelerationRate={"fast"}
                showsVerticalScrollIndicator={false}
                onMomentumScrollEnd={onScrollEnd}
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
    );
}
