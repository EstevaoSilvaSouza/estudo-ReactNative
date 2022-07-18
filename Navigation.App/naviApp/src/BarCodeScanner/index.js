import React from 'react';
import { View, Text, StyleSheet, Vibration, TouchableOpacity, Alert, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Octicons } from '@expo/vector-icons';

const BarCode = () => {

    const [hasPermission, setHasPermission] = React.useState(null)
    const [scanned, setScanned] = React.useState(false)
    const [data1, setData1] = React.useState(null)
    const [data2, setData2] = React.useState(null)
    const [result, setResult] = React.useState(null)
    const [data2Show, setData2Show] = React.useState(false)
    const [type, setType] = React.useState(BarCodeScanner.Constants.Type.back)

    React.useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }, [])

    if (hasPermission === null) {
        return <Text>Sem Permissão</Text>
    }

    if (hasPermission === false) {
        return <Text>Permissão Negada, por favor aceite as permissões de uso da camera!!</Text>
    }

    const handleCameraBaCode = async ({ type, data }) => {
        //Vibration.vibrate(100)

        if (!data2Show) {
            setData1(data)
            setScanned(true)
            return alert(`Código 1 Capturado ${data1}`)

        }

        if (data2Show) {
            setData2(data)
            alert(`Código 2 Capturado ${data2}`)
            const res = (data1 - data2)
            setResult(res);
            console.log(`resultado é: ${result}`)
            // setData1(null)
            //setData2(null)
            setScanned(true)
            return null
        }
    }

    return (
        <View style={style.containerBox}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleCameraBaCode}
                style={StyleSheet.absoluteFillObject}
                type={type}
            >
                <View style={style.containerMenu}>
                    {data1 &&
                        <TouchableOpacity style={style.check} visible={false}>
                            <Octicons name="check-circle-fill" size={28} color="green" />
                        </TouchableOpacity>}
                    {data2 &&
                        <TouchableOpacity style={style.check2}>
                            <Octicons name="check-circle-fill" size={28} color="green" />
                        </TouchableOpacity>}
                </View>

            </BarCodeScanner>
            {scanned && <Button title="Clique para Scanner" onPress={() => {
                setScanned(false)
                setData2Show(!data2Show)

            }}></Button>}
        </View>
    )
}

const style = StyleSheet.create({
    containerBox: {
        flex: 1,
        backgroundColor: '#8b9e9b',
    },
    containerMenu: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    check: {
        position: 'absolute',
        bottom: 50,
        left: '30%',
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    check2: {
        position: 'absolute',
        bottom: 50,
        right: '30%',
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default BarCode