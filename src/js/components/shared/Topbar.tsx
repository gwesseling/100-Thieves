import React, {useContext} from "react";
import {View, Image, TouchableNativeFeedback} from "react-native";
import {Link} from "react-router-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBars, faLink} from "@fortawesome/free-solid-svg-icons";
import styles from "_STYLES/components/topbar";
import {useNavigation} from "@react-navigation/native";
import {openLink} from "_LIBS/linking";

import logo from "_ASSETS/image/logo.png";

const HITSLOP = {top: 5, left: 5, right: 5, bottom: 5};

type Props = {
    float?: boolean;
};

/**
 * Topbar component
 */
export default function Topbar(props: Props) {
    const {float = false} = props;
    const {openDrawer} = useNavigation();

    /**
     * Open website
     */
    function openWebsite() {
        openLink("https://100thieves.com/");
    }

    return (
        <View style={[styles.topbar, float ? styles.topbarActive : undefined]}>
            <TouchableNativeFeedback onPress={openDrawer} hitSlop={HITSLOP}>
                <FontAwesomeIcon icon={faBars} size={20} style={styles.topbarMenu} />
            </TouchableNativeFeedback>
            <Image style={styles.topbarLogo} source={logo} />
            <TouchableNativeFeedback onPress={openWebsite} hitSlop={HITSLOP}>
                <FontAwesomeIcon icon={faLink} size={20} style={styles.topbarShop} />
            </TouchableNativeFeedback>
        </View>
    );
}
