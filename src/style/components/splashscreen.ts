import {StyleSheet} from 'react-native';
import stylevars from '../stylevars';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        backgroundColor: stylevars.primaryColor,
        opacity: 0.3,
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '100%',
        zIndex: 1
    },
    logo: {
        position: 'absolute',
        width: '60%',
        zIndex: 2,
        resizeMode: 'contain',
    },
    info: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
    },
    infoText: {
        color: 'white',
        marginRight: 10,
    },
    infoLogo: {
        height: 35,
        width: 35,
        transform: [
            {translateY: -5}
        ],
        marginRight: 10,
    }
});

export default styles;