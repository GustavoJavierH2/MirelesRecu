import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Main');
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Airbnb</Text>
      <Text style={styles.subtitle}>Au Pair</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F38B94' },
  logo: { fontSize: 48, fontWeight: 'bold', color: 'white' },
  subtitle: { fontSize: 24, color: 'white', marginTop: 10 },
});

export default SplashScreen;