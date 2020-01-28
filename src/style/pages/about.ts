import {StyleSheet} from 'react-native';
import stylevars from '../stylevars';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginBottom: 15,
    },
    header: {
        width: '100%',
        aspectRatio: 1.5,
        marginBottom: 10,
    },
    headerImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    headerOverlay: {
        height: '100%',
        width: '100%',
        zIndex: 1,
        position: 'absolute',
        top: 0,
    },
    section: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    sectionHeader: {
        width: '30%',
        color: stylevars.textColor,
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase',
        marginLeft: 10,
    },
    sectionTextContainer: {
        width: '60%',
    },
    sectionText: {
        color: stylevars.textColor,
        marginRight: 5,
    }

});

export default styles;