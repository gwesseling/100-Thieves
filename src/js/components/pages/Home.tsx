import React, {ReactNode, Fragment} from 'react';
import {View,Text} from 'react-native';
import Topbar from '_SHARED/Topbar';
import Content from '_SHARED/Content';

function Home(props): ReactNode {
    return (
        <Fragment>
            <Topbar />
            <Content>
                
            </Content>
        </Fragment>
        
    );
}

export default Home;