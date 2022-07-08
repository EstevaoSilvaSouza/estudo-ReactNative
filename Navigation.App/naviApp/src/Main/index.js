import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'

import { FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import styles from './style'

const Main = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textTitle}>Tools++ ;)</Text>
            <View style={styles.contentBox}>
                <View style={styles.contentItens}>
                    <TouchableOpacity style={styles.boxButton} onPress={() => navigation.navigate('BarCode')}>
                        <MaterialCommunityIcons name="barcode-scan" size={24} color="black" />
                        <Text style={styles.textItens}>Scanner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxButton} onPress={() => navigation.navigate('BarCode')}>
                        <FontAwesome5 name="clipboard-list" size={24} color="black" />
                        <Text style={styles.textItens} >Historico</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxButton} onPress={() => navigation.navigate('BarCode')}>
                        <FontAwesome5 name="tools" size={24} color="black" />
                        <Text style={styles.textItens}>Tools</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxButton} onPress={() => navigation.navigate('BarCode')}>
                        <Ionicons name="settings" size={24} color="black" />
                        <Text style={styles.textItens}>Configuração</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default Main