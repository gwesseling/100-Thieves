import React, {ReactNode} from "react";
import {SafeAreaView, StatusBar} from "react-native";
import styles from "_STYLES/general";
import stylevars from "_STYLES/stylevars";

import Main from "_COMPONENTS/entrypoints/Main";

/**
 * App entrypoint
 */
function App(): ReactNode {
    return (
        <SafeAreaView style={styles.app}>
            <StatusBar translucent backgroundColor={stylevars.statusBarColor} />
            <Main />
        </SafeAreaView>
    );
}

export default App;
