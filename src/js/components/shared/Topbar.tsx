import React, {ReactNode, useContext} from 'react';
import {View, Image, TouchableNativeFeedback} from 'react-native';
import {Link} from "react-router-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import styles from '_STYLES/components/topbar';
import {NavigationContext} from 'react-navigation';

import logo from '_ASSETS/image/logo.png';

function Topbar(props): ReactNode {
    const {openDrawer} = useContext(NavigationContext);
    const {float = false} = props;

    return (
        <View style={[styles.topbar, float ? styles.topbarActive : {}]}>
            <TouchableNativeFeedback onPress={openDrawer} hitSlop={{top: 5, left: 5, right: 5, bottom: 5}}>
                <FontAwesomeIcon icon={faBars} size={20} style={styles.topbarMenu} />
            </TouchableNativeFeedback>
            <Image style={styles.topbarLogo} source={logo} />
            <FontAwesomeIcon icon={faShoppingCart} size={20} style={styles.topbarShop} />
        </View>
    );
}

export default Topbar;