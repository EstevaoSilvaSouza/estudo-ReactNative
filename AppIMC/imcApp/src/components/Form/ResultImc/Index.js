import React from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';

import style from './style'

export default function ResultImc(props) {

    const CompartilharImc = async () => {
        const result = await Share.share({
            title: `Opaa compartilhe com a galera`,
            message: `Salve rapeize tudo certo, acabei de verificar meu IMC : ${props.imc}
                Você tambem pode no App Health++ baixe na playstore
            `
        })
    }
    return (

        <View style={style.containerBox}>
            <View style={style.containerShare}>

                <TouchableOpacity style={style.buttonShare} onPress={CompartilharImc}>
                    <Text style={style.btnText}>Compartilhar</Text>
                </TouchableOpacity>
                <View />

            </View>
            <Text style={style.messageIMC}>{props.messageImc}</Text>
            <Text style={style.imcNumber}>{props.imc}</Text>
        </View>
    )
}