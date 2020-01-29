// @flow

import React, {ReactNode} from 'react';
import {View, Image, Text} from 'react-native';
import styles from '_STYLES/components/splashscreen';
import bg from '_ASSETS/image/splashscreen.jpg';
import logo from '_ASSETS/image/logo.png';

// TODO: make native
function Splashscreen(): ReactNode {
    return (
        <View style={styles.container}>
            <Image style={styles.background} source={bg} />
            <View style={styles.overlay} />
            <Image style={styles.logo} source={logo} />
            <View style={styles.info}>
                <Text style={styles.infoText}>An unofficial</Text>
                <Image style={styles.infoLogo} source={logo} />
                <Text style={styles.infoText}>app</Text>
            </View>
        </View>
    );
}

export default Splashscreen;