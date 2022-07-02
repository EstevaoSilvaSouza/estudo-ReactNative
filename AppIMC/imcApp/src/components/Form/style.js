import React from 'react';
import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    containerBox: {
        flex: 1,

        width: '100%',
        backgroundColor: "#FFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        //borderBottomLeftRadius: 50,
        //borderBottomRightRadius: 50,
        bottom: 0,
    },
    formBox: {
        width: '100%',
        height: 'auto',
        padding: 10,
        marginTop: 50,
        marginBottom: 50
    },
    labelText: {
        fontSize: 35,
        color: '#1A1F23',
        paddingLeft: 30
    },
    inputStyle: {
        borderRadius: 50,
        marginLeft: '5%',
        textAlign: 'center',
        height: 40,
        paddingLeft: 10,
        color: '#1B1C1D',
        backgroundColor: '#E6EEF3',
        width: '90%',
    },
    buttonCalculadora: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#FF0043',
        paddingTop: 15,
        paddingBottom: 12,
        marginTop: 50,
        marginLeft: '5%'
    },
    textBtn: {
        color: '#FFF',
        fontSize: 20
    },
    textError: {
        color: '#FF0043',
        fontWeight: 'bold',
        fontSize: 19,

    }


})

export default style