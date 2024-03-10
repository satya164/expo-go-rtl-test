import { StatusBar } from 'expo-status-bar';
import { I18nManager, StyleSheet, Text, View } from 'react-native';

I18nManager.forceRTL(true);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>RTL enabled? {String(I18nManager.getConstants().isRTL)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  }
});
