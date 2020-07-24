import React, {ReactNode} from "react";
import {View, Text, Image, Dimensions} from "react-native";
import styles from "_STYLES/components/game";
import Stat from "_COMPONENTS/Stat";

/**
 * Game card
 */
function Game(props): ReactNode {
    const {team, opponent} = props;
    console.log(props, styles);
    return (
        <View style={styles.game}>
            <View style={styles.header}>
                <Image
                    source={{uri: "https://cdn.pandascore.co/images/team/image/125738/dignitas-fe.png"}}
                    style={styles.team}
                />
                <Text style={styles.headerText}>VS</Text>
                <Image
                    source={{uri: "https://cdn.pandascore.co/images/team/image/125745/carnage-fe.png"}}
                    style={styles.team}
                />
            </View>
            <View style={styles.bottombar}>
                <Stat title="Kills" value={20} />
                <Stat title="Kills" value={20} />
                <Stat title="Kills" value={20} />
            </View>
        </View>
    );
}

export default Game;
