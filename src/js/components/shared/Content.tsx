import React, {ReactNode} from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from '_STYLES/general';
import general from '_STYLES/general';

type Props = {
    title?: string,
    style?: Object,
    children: ReactNode,
}

function Content(props: Props): ReactNode {
    const {style = {}, title, children} = props;

    return (
        <View style={[styles.main, style]}>
            {title && <Text style={general.pageTitle}>{title}</Text>}
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        </View>
    );

}

export default Content;