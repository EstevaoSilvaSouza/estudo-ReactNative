import { StyleSheet, View } from 'react-native';

import Title from './src/components/Title/'
import Form from './src/components/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67747D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
