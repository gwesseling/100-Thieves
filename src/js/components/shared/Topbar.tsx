// @flow
import React, {ReactNode} from 'react';
import {View, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import styles from '_STYLES/components/topbar';

import logo from '_ASSETS/image/logo.png';

function Topbar(): ReactNode {

    return (
        <View style={styles.topbar}>
            <FontAwesomeIcon icon={faBars} size={20} style={styles.topbarMenu} />
            <Image style={styles.topbarLogo} source={logo} />
            <FontAwesomeIcon icon={faShoppingCart} size={20} style={styles.topbarShop} />
        </View>
    );

}

export default Topbar;