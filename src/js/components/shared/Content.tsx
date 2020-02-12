import React, {ReactNode} from 'react';
import {ScrollView, View, Text} from 'react-native';
import generalStyles from '_STYLES/general';

type Props = {
    title?: string,
    style?: Object,
    children: ReactNode,
    withoutScrollView: boolean
}

function Content(props: Props): ReactNode {
    const {style = {}, title, children, withoutScrollView} = props;

    return (
        <View style={[generalStyles.main, style]}>
            {title && <Text style={generalStyles.pageTitle}>{title}</Text>}
            {!withoutScrollView ?
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </ScrollView> : 
                <View>
                    {children}
                </View>
            }

        </View>
    );

}

export default Content;