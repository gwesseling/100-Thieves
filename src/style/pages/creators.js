import {StyleSheet} from 'react-native';
import stylevars from '../stylevars';

const styles = StyleSheet.create({
    creators: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    creator: {
        padding: 20,
        alignItems: 'center',
        marginBottom: 25,
    },
    creatorImage: {
        height: 125,
        width: 125,
        resizeMode: 'cover',
        borderRadius: 100,
    },
    creatorName: {
        color: stylevars.textColor,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
    },
    creatorTag: {
        color: stylevars.lighterTextColor,
        textAlign: 'center',
        fontSize: 12,
    }
});

export default styles;