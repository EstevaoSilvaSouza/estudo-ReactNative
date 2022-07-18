import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    quotationContainer: {
        width: '100%',
        height: 'auto',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        flexDirection: 'row',
        marginBottom: 10

    },

    quotationBoxOne: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',

    },
    quotationBoxTwo: {
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textHeader: {
        color: '#F50d41',
        marginRight: 50,
        fontWeight: 'bold',
        fontSize: 16
    },
    photo: {
        width: 40,
        height: 50,

    },
    textPrince: {
        color: 'rgb(0,255,0)'

    }

})

export default styles