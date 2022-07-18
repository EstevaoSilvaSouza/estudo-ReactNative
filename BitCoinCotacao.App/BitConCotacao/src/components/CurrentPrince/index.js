import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

const CurrentPrince = (props) => {
    return (
        <View style={styles.headerPrince}>
            <Text style={styles.princeCurrent}>R$ {props.valorAtual}</Text>
            <Text style={styles.textPrince}>Valor da cotação hoje</Text>
        </View>
    )
}

export default CurrentPrince