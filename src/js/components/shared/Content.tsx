import React, {ReactNode} from "react";
import {ScrollView, View, Text} from "react-native";
import generalStyles from "_STYLES/general";

type Props = {
    title?: string;
    style?: Record<string, string | number>;
    children: ReactNode;
    withoutScrollView: boolean;
};

/**
 * Handle page contexnt
 */
export default function Content({style = {}, title, children, withoutScrollView}: Props) {
    const contentStyling = [generalStyles.main, style];

    return (
        <View style={generalStyles.container}>
            {title && <Text style={generalStyles.pageTitle}>{title}</Text>}
            {withoutScrollView ? (
                <View style={contentStyling}>{children}</View>
            ) : (
                <ScrollView
                    style={contentStyling}
                    contentInsetAdjustmentBehavior="automatic"
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </ScrollView>
            )}
        </View>
    );
}
