import React, {type Node} from 'react';
import {View,Text, Image} from 'react-native';
import personStyle from '../../../style/components/person';

type Props = {|
    cover: string,
    name: string,
    tag: string,
    style: Object,
|}

function Person(props: Props): Node {
    const {cover, name, tag, style, imageStyle} = props;

    return (
        <View style={[personStyle.person, style]}>
            <Image style={[personStyle.personImage, imageStyle]} source={cover} />
            <Text style={personStyle.personName}>{name}</Text>
            <Text style={personStyle.personTag}>{tag}</Text>
        </View>
    );
}

export default Person;