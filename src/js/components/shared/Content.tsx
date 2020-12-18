import React, {ReactNode} from "react";
import {ScrollView, View, Text} from "react-native";
import generalStyles from "_STYLES/general";

interface Props {
    title?: string;
    style?: Record<string, string | number>;
    children: ReactNode;
    withoutScrollView: boolean;
}

/**
 * Handle page contexnt
 */
function Content(props: Props): ReactNode {
    const {style = {}, title, children, withoutScrollView} = props;
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

export default Content;
