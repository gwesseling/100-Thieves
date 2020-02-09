import React, {ReactNode, Fragment} from 'react';
import {View, FlatList, Text} from 'react-native';
import general from '_STYLES/general';
import styles from '_STYLES/pages/creators';
import {creatorsMock} from '_COMPONENTS/mocks/creatorsMock';
import Person from '_SHARED/Person';
import Topbar from '_SHARED/Topbar';

function Creators(): ReactNode {
    return (
        <Fragment>
            <Topbar />
            <View style={[general.main, general.pageContainer]}>
                <Text style={general.pageTitle}>Creators</Text>
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
            </View>
        </Fragment>
    );
}

export default Creators;