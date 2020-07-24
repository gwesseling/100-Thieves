import React, {ReactNode, Fragment} from "react";
import {View, FlatList, Text} from "react-native";
import styles from "_STYLES/pages/creators";
import {creatorsMock} from "_COMPONENTS/mocks/creatorsMock";
import Person from "_SHARED/Person";
import Topbar from "_SHARED/Topbar";
import Content from "_SHARED/Content";
import {useNavigation} from "@react-navigation/native";

interface Item {
    item: {
        id: string;
        name: string;
        tag: string;
        cover: string;
    };
}

/**
 * Creators page
 */
function Creators(): ReactNode {
    const {navigate} = useNavigation();

    /**
     * Render items
     */
    function renderPersons({item}: Item) {
        return (
            <Person
                name={item.name}
                tag={item.tag}
                cover={item.cover}
                onPress={() => navigate("Creator", {id: item.id})}
            />
        );
    }

    return (
        <Fragment>
            <Topbar />
            <Content title="Creators" withoutScrollView>
                <FlatList
                    columnWrapperStyle={styles.creators}
                    numColumns={2}
                    data={creatorsMock}
                    renderItem={renderPersons}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </Content>
        </Fragment>
    );
}

export default Creators;
