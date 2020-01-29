import {StyleSheet} from 'react-native';
import stylevars from '_STYLES/stylevars';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: stylevars.primaryColor,
    },
    pageContainer: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    pageTitle: {
        color: stylevars.textColor,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default styles;