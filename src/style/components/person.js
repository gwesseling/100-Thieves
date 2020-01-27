import {StyleSheet} from 'react-native';
import stylevars from '../stylevars';

const styles = StyleSheet.create({
    person: {
        padding: 20,
        alignItems: 'center',
        marginBottom: 25,
    },
    personImage: {
        height: 125,
        width: 125,
        resizeMode: 'cover',
        borderRadius: 100,
    },
    personName: {
        color: stylevars.textColor,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
    },
    personTag: {
        color: stylevars.lighterTextColor,
        textAlign: 'center',
        fontSize: 12,
    }
});

export default styles;