import {StyleSheet} from 'react-native';
import stylevars from '../stylevars';

const styles = StyleSheet.create({
    topbar: {
        height: 78,
        width: '100%',
        backgroundColor: stylevars.primaryColor,
        paddingTop: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    topbarMenu: {
        color: 'white',
        marginTop: 10,
        marginLeft: 15,
    },
    topbarLogo: {
        height: 45,
        width: 45,
        resizeMode: 'cover',
    },
    topbarShop: {
        color: 'white',
        marginTop: 10,
        marginRight: 15,
    },
});

export default styles;