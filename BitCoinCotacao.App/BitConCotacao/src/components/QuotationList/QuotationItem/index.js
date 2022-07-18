import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'

const QuotationItem = (props) => {
    return (

        <View style={styles.quotationContainer}>
            <View style={styles.box}>
                <View style={styles.quotationBoxOne}>
                    <Image style={styles.photo} source={require('../../../../assets/img/bit.png')} />
                    <Text style={styles.textHeader}>{props.data}</Text>
                </View>
                <View style={styles.quotationBoxTwo}>
                    <Text style={styles.textPrince}>${props.valor}</Text>
                </View>
            </View>
        </View>


    )
}

export default QuotationItem