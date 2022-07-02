import React from 'react';
import { View, Text } from 'react-native'

import style from './style'

export default function Title() {
    return (
        <View style={style.titleBox}>
            <Text style={style.textStyle}>Heart Saude+</Text>
        </View>
    )
}