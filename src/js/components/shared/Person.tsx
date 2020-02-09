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
    const {cover, name, tag, styles = {}} = props;
    const {containerStyle, imageStyle, nameStyle, tagStyle} = styles;

    return (
        <View style={[personStyle.person, containerStyle]}>
            <Image style={[personStyle.personImage, imageStyle]} source={cover} />
            <Text style={[personStyle.personName, nameStyle]}>{name}</Text>
            {tag ? <Text style={[personStyle.personTag, tagStyle]}>{tag}</Text> : null}
        </View>
    );
}

export default Person;