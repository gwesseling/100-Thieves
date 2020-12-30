import React, {ReactNode, useContext} from "react";
import {View, Image, TouchableNativeFeedback} from "react-native";
import {Link} from "react-router-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBars, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import styles from "_STYLES/components/topbar";
import {useNavigation} from "@react-navigation/native";

import logo from "_ASSETS/image/logo.png";

const HITSLOP = {top: 5, left: 5, right: 5, bottom: 5};

type Props = {
    float?: boolean;
};

/**
 * Topbar component
 */
function Topbar(props: Props): ReactNode {
    const {float = false} = props;
    const {openDrawer} = useNavigation();

    return (
        <View style={[styles.topbar, float ? styles.topbarActive : {}]}>
            <TouchableNativeFeedback onPress={openDrawer} hitSlop={HITSLOP}>
                <FontAwesomeIcon icon={faBars} size={20} style={styles.topbarMenu} />
            </TouchableNativeFeedback>
            <Image style={styles.topbarLogo} source={logo} />
            <FontAwesomeIcon icon={faShoppingCart} size={20} style={styles.topbarShop} />
        </View>
    );
}

export default Topbar;
