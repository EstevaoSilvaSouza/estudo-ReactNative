import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlatListComponent from './src/components/flatlist/'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>App rodando</Text>
      <FlatListComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
