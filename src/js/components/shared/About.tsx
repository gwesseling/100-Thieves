import React from "react";
import {View, Text} from "react-native";
import styles from "_STYLES/pages/creator";

type Props = {
    content: string[];
};

/**
 * About component
 */
export default function About({content}: Props) {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.aboutTitle}>About</Text>
            {content.map((text, i) => (
                <Text key={i} style={styles.aboutText}>
                    {text}
                </Text>
            ))}
        </View>
    );
}
