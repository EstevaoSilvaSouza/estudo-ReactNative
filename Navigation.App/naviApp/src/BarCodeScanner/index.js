import React from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';

const BarCode = () => {

    const [hasPermission, setHasPermission] = React.useState(null)
    const [scanned, setScanned] = React.useState(false)

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
        Vibration.vibrate(1000)
        alert(`Tipo é ${type} e o dado é ${data}`)
        setScanned(true)
    }

    return (
        <View style={style.containerBox}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleCameraBaCode}
                style={StyleSheet.absoluteFillObject}

            />
            {scanned && <Text onPress={() => setScanned(false)}>Scanear novamente!!</Text>}
        </View>
    )
}

const style = StyleSheet.create({
    containerBox: {
        flex: 1,
        backgroundColor: '#8b9e9b',
    }
})

export default BarCode