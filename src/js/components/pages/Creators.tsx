import React, {ReactNode, Fragment} from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from '_STYLES/pages/creators';
import {creatorsMock} from '_COMPONENTS/mocks/creatorsMock';
import Person from '_SHARED/Person';
import Topbar from '_SHARED/Topbar';
import Content from '_SHARED/Content';

function Creators(): ReactNode {
    return (
        <Fragment>
            <Topbar />
            <Content
                title="Creators" 
                withoutScrollView
            >
                <FlatList
                    columnWrapperStyle={styles.creators}
                    numColumns={2}
                    data={creatorsMock}
                    renderItem={({item}) => 
                        <Person 
                            name={item.name}
                            tag={item.tag}
                            cover={item.cover}
                        />
                    }
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </Content>
        </Fragment>
    );
}

export default Creators;