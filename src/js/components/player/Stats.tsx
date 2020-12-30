import React, {ReactNode} from "react";
import {View} from "react-native";
import styles from "_STYLES/pages/creator";
import Stat from "_COMPONENTS/Stat";

/**
 * Stats
 */
export default function Stats(): ReactNode {
    return (
        <View style={styles.statsContainer}>
            <Stat title="Games played" value={20} />
            <Stat title="kill" value={64} deci={1} />
            <Stat title="Deaths" value={15} />
        </View>
    );
}
