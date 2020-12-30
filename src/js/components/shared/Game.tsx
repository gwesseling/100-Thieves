import React, {ReactNode} from "react";
import {View, Text, Image, Dimensions} from "react-native";
import styles from "_STYLES/components/game";
import Stat from "_COMPONENTS/Stat";

type Props = {
    team: string;
    opponent: string;
    stats: {
        kills: number;
        assists: number;
        deaths: number;
    };
};

/**
 * Game card
 */
function Game({team, opponent, stats}: Props): ReactNode {
    return (
        <View style={styles.game}>
            <View style={styles.header}>
                <Image source={{uri: team}} style={styles.team} />
                <Text style={styles.headerText}>VS</Text>
                <Image source={{uri: opponent}} style={styles.team} />
            </View>
            <View style={styles.bottombar}>
                <Stat title="Kills" value={stats.kills} />
                <Stat title="Assists" value={stats.assists} />
                <Stat title="Deaths" value={stats.deaths} />
            </View>
        </View>
    );
}

export default Game;
