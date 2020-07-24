import React, {ReactNode} from "react";
import {ScrollView, View, Text} from "react-native";
import generalStyles from "_STYLES/general";

interface Props {
    title?: string;
    style?: Record<string, any>;
    children: ReactNode;
    withoutScrollView: boolean;
}

/**
 * Handle page contexnt
 */
function Content(props: Props): ReactNode {
    const {style = {}, title, children, withoutScrollView} = props;

    return (
        <View style={[generalStyles.main, style]}>
            {title && <Text style={generalStyles.pageTitle}>{title}</Text>}
            {!withoutScrollView ? (
                <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
                    {children}
                </ScrollView>
            ) : (
                <View>{children}</View>
            )}
        </View>
    );
}

export default Content;
