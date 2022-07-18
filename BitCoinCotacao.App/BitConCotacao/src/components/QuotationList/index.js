import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import style from './style'
import QuotationItem from './QuotationItem/'

const QuotationList = (props) => {

    const requestDay = props.requestDay
    return (
        <React.Fragment>
            <View style={style.containerBox}>
                <TouchableOpacity onPress={() => requestDay(7)} style={style.buttonList}>
                    <Text style={style.buttonText}>7D</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => requestDay(15)} style={style.buttonList}>
                    <Text style={style.buttonText}>15D</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => requestDay(30)} style={style.buttonList}>
                    <Text style={style.buttonText}>1M</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => requestDay(90)} style={style.buttonList}>
                    <Text style={style.buttonText}>3M</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => requestDay(180)} style={style.buttonList}>
                    <Text style={style.buttonText}>6M</Text>
                </TouchableOpacity>
            </View>
            {props.listData && (
                <Text style={style.textCenter}>Lista de {props.day} dias</Text>
            )}
            <ScrollView>
                <FlatList
                    data={props.listData}
                    renderItem={({ item }) => {
                        return < QuotationItem valor={item.valor} data={item.data} />
                    }}
                />
            </ScrollView>

        </React.Fragment>
    )
}

export default QuotationList
