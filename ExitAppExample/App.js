import React from 'react';
import { StyleSheet, View, Button, BackHandler, Platform, Alert } from 'react-native';

const App = () => {
  const handleExit = () => {
    if (Platform.OS === 'android') {
      BackHandler.exitApp();
    } else {
      Alert.alert('Beenden', 'Das Beenden der App wird auf iOS nicht unterstützt.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Beenden" onPress={handleExit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default App;
