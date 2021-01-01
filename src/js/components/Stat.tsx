import React from "react";
import {View, Text} from "react-native";
import styles from "_STYLES/pages/creator";
import {formatNumber} from "_LIBS/numbers";
import useCountUpAnimation from "_HOOKS/countUpAnimation";

type Props = {
    style?: {[key: string]: string | number};
    title: string;
    deci: number;
    value: number;
    animation: boolean;
};

/**
 * Stat component
 */
export default function Stat(props: Props) {
    const {style = {}, animation, title, deci = 2, value = 0} = props;
    const {number, suffix} = formatNumber(value, deci);
    const {count} = useCountUpAnimation(animation, number, deci);

    return (
        <View style={[styles.stat, style]}>
            <Text style={styles.statValue}>
                {count}
                {suffix}
            </Text>
            <Text style={styles.statTitle}>{title}</Text>
        </View>
    );
}
