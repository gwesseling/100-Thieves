// @flow
import React, {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';
import styles from '_STYLES/general';
import Router from '_COMPONENTS/entrypoints/Router';
import Splashscreen from '_COMPONENTS/Splashscreen';
import Topbar from '_SHARED/Topbar';

interface Props {

}

// TODO: router enum.
function Main(props: Props): ReactNode {

    return (
        <View style={{flex: 1}}>
            <Topbar />
            <ScrollView
                style={styles.main}
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
            >
                <Router />
            </ScrollView>
        </View>

    );

    // return (
    //     <Splashscreen />
    // );
}

export default Main;