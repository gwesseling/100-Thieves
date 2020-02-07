import {StyleSheet} from 'react-native';
import stylevars from '_STYLES/stylevars';

const styles = StyleSheet.create({
    card: {
        width: '100%',
        aspectRatio: 2.5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    cardImage: {
        height: '100%',
        width: '100%',
        borderRadius: 5,
        resizeMode: 'cover'
    },
    cardOverlay: {
        height: '100%',
        width: '100%',
        backgroundColor: stylevars.secondaryColor,
        position: 'absolute',
        opacity: 0.6,
        borderRadius: 5,
    },
    cardOverlayBlack: {
        backgroundColor: stylevars.primaryColor,
        opacity: 0.6,
    },
    cardText: {
        color: stylevars.textColor,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
        position: 'absolute',
        textAlign: 'center'
    }
});

export default styles;