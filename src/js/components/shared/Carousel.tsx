import React, {ReactNode} from "react";
import {View, FlatList, Text} from "react-native";
import styles from "_STYLES/components/carousel";

type Props = {
    title: string;
    data: Record<string, string | number>[];
    renderItem: (item: Record<string, string | number>, index: number) => ReactNode;
    keyExtractor: (item: Record<string, string | number>) => string;
    style?: {
        containerStyle: Record<string, string | number>;
        titleStyle: Record<string, string | number>;
    };
};

/**
 * Carousel component
 */
export default function Carousel(props: Props) {
    const {title, style = {}, ...restProps} = props;
    const {containerStyle, titleStyle} = style;

    return (
        <View style={containerStyle}>
            {title ? <Text style={[styles.sectionText, titleStyle]}>{title}</Text> : null}
            <FlatList horizontal showsHorizontalScrollIndicator={false} {...restProps} />
        </View>
    );
}
