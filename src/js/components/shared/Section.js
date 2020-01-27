// @flow

import React, {type Node} from 'react';
import {View, FlatList, Text} from 'react-native';
import style from '../../../style/components/section';


type Props = {|
    title: string,
    data: Array<Object>,
    renderItem: (item: Object, index: number) => Node,
    keyExtractor: (item: Object) => string,
|}

function Section(props: Props): Node {
    const {title, ...restProps} = props;

    return (
        <View style={style.section}>
            <Text style={style.sectionText}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToAlignment={"start"}
                snapToInterval={135}
                decelerationRate={"fast"}
                {...restProps}
            />
        </View>
    );
}

export default Section;