/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import { Main } from './components/Main';
// import { Logo } from './components/Logo';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <Logo /> */}
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
});
