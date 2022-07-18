import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from './src/Main/index'
import BarCode from './src/BarCodeScanner/index'

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' options={{ title: '', headerTitleAlign: 'center' }} component={Main} />
        <Stack.Screen name='BarCode' options={{ title: 'BarCode Scanner', headerTitleAlign: 'center' }} component={BarCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
