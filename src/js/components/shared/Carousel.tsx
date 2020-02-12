import React, {ReactNode} from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from '_STYLES/components/carousel';

type Props = {
    title: string,
    data: Array<Object>,
    renderItem: (item: Object, index: number) => ReactNode,
    keyExtractor: (item: Object) => string,
}

function Section(props: Props): ReactNode {
    const {title, style = {}, ...restProps} = props;
    const {containerStyle, titleStyle} = style;

    return (
        <View style={[containerStyle]}>
            {title && <Text style={[styles.sectionText, titleStyle]}>{title}</Text>}
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                {...restProps}
            />
        </View>
    );
}

export default Section;