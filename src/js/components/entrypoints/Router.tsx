import React, {ReactNode} from 'react';
import {NativeRouter,Route} from "react-router-native";

import Home from '../pages/Home';
import About from '../pages/About';
import Teams from '../pages/Teams';
import Creators from '../pages/Creators';
import Players from '../pages/Players';

// TODO: change to react navigation (https://reactnavigation.org/) 
function Router(): ReactNode {

    return (
        <NativeRouter>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/teams" component={Teams} />
            <Route path="/creators" component={Creators} />
            <Route path="/players" component={Players} />
        </NativeRouter>
    );
} 

export default Router;