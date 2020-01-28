import React, {ReactNode} from 'react';
import {View,Text} from 'react-native';
import general from '../../../style/general';
import style from '../../../style/pages/creators';
import {creatorsMock} from '../mocks/creatorsMock';
import Person from '../shared/Person';

function Creators(): ReactNode {
    return (
        <View style={general.pageContainer}>
            <Text style={general.pageTitle}>Creators</Text>
            <View style={style.creators}>
                {creatorsMock.map(({name, tag, cover}, i) => 
                   <Person 
                        name={name}
                        tag={tag}
                        cover={cover}
                        key={i}
                   />
                )}
            </View>
        </View>
    );
}

export default Creators;