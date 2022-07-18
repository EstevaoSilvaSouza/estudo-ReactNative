import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    containerBox: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        marginTop: 20


    },
    buttonList: {
        backgroundColor: '#F50d41',
        width: 50,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    textCenter: {
        color: '#F50d41',
        fontWeight: 'bold',
        fontSize: 22
    }
})

export default style