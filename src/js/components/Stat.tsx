import React, {ReactNode} from "react";
import {View, Text} from "react-native";
import styles from "_STYLES/pages/creator";
import {formatNumber} from "_LIBS/numbers";
import useCountUpAnimation from "_HOOKS/countUpAnimation";

interface Props {
    title: string;
    value: number | string;
}

/**
 * Stat component
 */
function Stat(props: Props) {
    const {title, deci = 2, value} = props;
    const {number, suffix} = formatNumber(value, deci);
    const {count} = useCountUpAnimation(number, deci);

    return (
        <View style={styles.stat}>
            <Text style={styles.statValue}>
                {count}
                {suffix}
            </Text>
            <Text style={styles.statTitle}>{title}</Text>
        </View>
    );
}

export default Stat;
