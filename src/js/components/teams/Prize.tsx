import React from "react";
import {View, Text, Image, Dimensions} from "react-native";
import styles from "_STYLES/components/prize";

type Props = {
    title: string;
    cover: string;
    description: string;
    placement: string;
};

/**
 * Prize/ award component
 */
export default function Prize({title, cover, description, placement}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} resizeMode="contain" source={{uri: cover}} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.footer}>
                    <View style={styles.divider} />
                    <Text style={styles.placement}>{placement}</Text>
                    <View style={styles.divider} />
                </View>
            </View>
        </View>
    );
}
