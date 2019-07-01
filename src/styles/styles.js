import { StyleSheet, Dimensions } from 'react-native';

import { colors, fonts, metrics } from '.';

const styles = StyleSheet.create({


    // ---> Styles full

    content: {

        backgroundColor: colors.white,
        padding: metrics.padding,

    },
    dsadas:{

    },

    section: {

        backgroundColor: colors.white,
        paddingHorizontal: metrics.padding,

    },

    // ---> Login Styles

    imageLogin: {

        height: 282,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.dark,
        overflow: 'hidden',

    },

    textRecovery: {

        color: colors.primaryText,
        textDecorationColor: colors.primaryText,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'

    },

    viewRecovery: {

        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20

    },

    meedNameLogin: {

        fontFamily: 'moderna',
        color: colors.white,
        fontSize: 22,
        marginTop: 10,  

    },

    // ---> form styles

    titleForm: {

        fontSize: fonts.bigger,
        fontWeight:'800',
        color: colors.dark,
        marginBottom: 20,

    },

    contentForm: {// backgroundColor: colors.primary,
    },

    contentSwitch: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 4,
        backgroundColor: colors.greyLight,
        marginTop: 14,

    },

    containerTitleLabel: {
        height:  55, 
        marginTop: 10,  
        alignItems: 'center', 
        flexDirection: 'row', 
        paddingHorizontal: 15, 
    },

    textLabel: {
        marginLeft: 10, 
        fontSize: fonts.bigger, 
        fontFamily: fonts.semi_bold,
    },


    containerLogin: {
        flex: 1,
        backgroundColor: colors.primary, 
    },


    containerTextInput: {
        height: 50, 
        alignItems: 'center', 
        flexDirection: 'row',
        marginHorizontal: 30,
        marginVertical: 10,
        borderBottomWidth: StyleSheet.hairlineWidth, 
    },

    textInputStyle: {
        flex: 1,
        textAlign: 'center', 
        marginLeft: 40, 
        color: colors.primary, 
    },

    buttonSearch: {
        width: 40, 
        height: 40, 
        borderRadius: 4, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: colors.primary,
    },

    textError: {
        color: colors.primary, 
        textAlign: 'center',
    },


    containerHeaderCategory: {
        paddingTop: 15, 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 20, 
        backgroundColor: '#FFF', 
    },

    containerTextHeaderCategory: {
        marginLeft: 10
    },

    iconLogo: {
        width: 50,
        height: 50, 
    },

    textEasy: {
        fontWeight: '500',
        fontSize: fonts.force, 
    },

    textDrinks: {
        fontSize: 20, 
        fontWeight: '100',
    },

    bodyCategory: {
        flex: 1, 
        paddingHorizontal: 30, 
        backgroundColor: '#fff', 
        justifyContent: 'space-around' ,
   },

   iconCategory: {
        width: 80,
        height: 80, 
    },

    bodyWhite: {
        flex: 1, 
        paddingTop: 15, 
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
    },

    filterButton: {
        zIndex: 5, 
        right: 20, 
        width: 65, 
        height: 65, 
        bottom: 20, 
        elevation: 5, 
        borderRadius: 32.5, 
        alignItems:'center', 
        position: 'absolute', 
        justifyContent: 'center', 
        backgroundColor: colors.white, 
    },

    buttonFastFilter: {
        height: 30, 
        borderRadius: 15,  
        alignItems: 'center', 
        paddingHorizontal: 10,
        justifyContent: 'center', 
    },


    textTitleScreen: {
        color: '#FFF', 
        fontWeight: '500', 
        fontSize: fonts.bigger, 
    },
});

export default styles;
