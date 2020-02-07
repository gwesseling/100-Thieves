import React, {ReactNode} from 'react';
import {View,Text, Image} from 'react-native';
import personStyle from '_STYLES/components/person';

type Props = {
    cover: string,
    name: string,
    tag: string,
    style?: Object,
    imageStyle?: Object,
}

function Person(props: Props): ReactNode {
    const {cover, name, tag, style, imageStyle} = props;

    return (
        <View style={[personStyle.person, style]}>
            <Image style={[personStyle.personImage, imageStyle]} source={cover} />
            <Text style={personStyle.personName}>{name}</Text>
            {tag ? <Text style={personStyle.personTag}>{tag}</Text> : null}
        </View>
    );
}

export default Person;