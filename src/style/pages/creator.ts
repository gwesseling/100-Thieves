import {StyleSheet} from 'react-native';
import stylevars from '_STYLES/stylevars';

const styles = StyleSheet.create({
    creator: {
        marginBottom: 0,
    },
    creatorName: {
        fontSize: 20,
        marginBottom: 5,
    },
    creatorImage: {
        height: 150,
        width: 150,
        marginBottom: 5,
    },
    statsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 25,
    },
    stat: {
        flex: 1,
        alignItems: 'center'
    },
    stateValue: {
        color: stylevars.textColor,
        fontSize: 16,
        fontWeight: 'bold',
    },
    stateTitle: {
        color: stylevars.lighterTextColor,
    },
    aboutTitle: {
        color: stylevars.textColor,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    aboutText: {
        color: stylevars.lighterTextColor,
        fontSize: 14,
        lineHeight: 18,
        marginBottom: 25,
    }
});

export default styles;