// @flow

import React, {Component, type Node} from 'react';
import {View, Image, Text} from 'react-native';
import styles from '../../style/components/splashscreen';
import bg from '../../assets/image/splashscreen.jpg';
import logo from '../../assets/image/logo.png';

// TODO: make native
function Splashscreen(): Node {
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