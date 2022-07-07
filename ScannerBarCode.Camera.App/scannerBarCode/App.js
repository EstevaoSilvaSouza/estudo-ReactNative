
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Vibration, Modal } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {

  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(null);
  const [onVisible, setOnVisible] = React.useState(false);
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted')
    })();
  }, [])

  if (hasPermission === null) {
    return <View />
  }

  if (hasPermission === false) {
    return <Text>Sem permissão!!</Text>
  }

  const HandleBarCodeScanner = async ({ type, data }) => {
    setScanned(true)
    setData({ type: type, data: data })
    setOnVisible(true)
    Vibration.vibrate(1000)
  }

  return (
    <SafeAreaView style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : HandleBarCodeScanner}
        style={StyleSheet.absoluteFillObject}
      ></BarCodeScanner>

      {scanned && (
        <Modal animationType="slide"
          transparent={true}
          visible={onVisible}
        >
          <View style={styles.containerBox}>
            <Text>Tipo é {data.type} + o Código é {data.data}</Text>
            <Button title='Close' onPress={() => {
              setOnVisible(false)
              setScanned(false)
            }}></Button>
          </View>
        </Modal>
      )
      }
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerBox: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 250,
    marginBottom: 250,
    marginLeft: 20,
    marginRight: 20,
  }
});
