// @flow
import React, {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';
import styles from '../../../style/general';
import Router from './Router';
import Splashscreen from '../Splashscreen';
import Topbar from '../shared/Topbar';

interface Props {

}

// TODO: import aliases and router enum.
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