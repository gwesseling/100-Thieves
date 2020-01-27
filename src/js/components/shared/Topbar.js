// @flow
import React, {type Node} from 'react';
import {View, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import styles from '../../../style/components/topbar';

import logo from '../../../assets/image/logo.png';

type Props = {|

|}

function Topbar(props: Props): Node {


    return (
        <View style={styles.topbar}>
            <FontAwesomeIcon icon={faBars} size={20} style={styles.topbarMenu} />
            <Image style={styles.topbarLogo} source={logo} />
            <FontAwesomeIcon icon={faShoppingCart} size={20} style={styles.topbarShop} />
        </View>
    );

}

export default Topbar;