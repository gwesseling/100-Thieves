import React, {ReactNode} from "react";
import styles from "_STYLES/pages/creator";
import {View} from "react-native";
import Stat from "_COMPONENTS/Stat";

type Props = {
    stats: {
        subscriberCount: number;
        videoCount: number;
        viewCount: number;
    };
};

/**
 * Creator stats
 */
export default function Stats({stats}: Props): ReactNode {
    return (
        <View style={styles.statsContainer}>
            <Stat title="Subscribers" animation value={stats.subscriberCount} />
            <Stat title="Videos" animation value={stats.videoCount} deci={1} />
            <Stat title="Views" animation value={stats.viewCount} />
        </View>
    );
}
