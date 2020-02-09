// @flow
import React, {ReactNode} from 'react';
import {View, FlatList, Text} from 'react-native';
import style from '_STYLES/components/section';

type Props = {
    title: string,
    data: Array<Object>,
    renderItem: (item: Object, index: number) => ReactNode,
    keyExtractor: (item: Object) => string,
}

function Section(props: Props): ReactNode {
    const {title, style = {}, ...restProps} = props;

    return (
        <View style={[style.section, style]}>
            {title && <Text style={style.sectionText}>{title}</Text>}
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                {...restProps}
            />
        </View>
    );
}

export default Section;