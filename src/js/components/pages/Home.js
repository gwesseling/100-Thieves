import React, {type Node} from 'react';
import {View,Text} from 'react-native';
import {Link} from "react-router-native";

function Home(): Node {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Link to="/about">
                    <Text style={{color: 'white', padding: 10, fontSize: 20}}>About</Text>
                </Link>
                <Link to="/teams">
                    <Text style={{color: 'white', padding: 10, fontSize: 20}}>Teams</Text>
                </Link>
                <Link to="/creators">
                    <Text style={{color: 'white', padding: 10, fontSize: 20}}>Creators</Text>
                </Link>
                <Link to="/players">
                    <Text style={{color: 'white', padding: 10, fontSize: 20}}>Players</Text>
                </Link>
            </View>
        </View>
    );
}

export default Home;