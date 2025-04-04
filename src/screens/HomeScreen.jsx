import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SearchBar style={styles.searchBar} />
      <Text style={styles.title}>Introducing Airbnb Au Pair</Text>
      <Text style={styles.subtitle}>Choose a family home with a qualified childcare provider.</Text>
      <Image source={{ uri: 'https://via.placeholder.com/300x200' }} style={styles.image} />
      <Button 
        title="Explore Homes" 
        onPress={() => navigation.navigate('Details')} 
        buttonStyle={styles.button} 
        containerStyle={styles.buttonContainer} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'white' 
  },
  searchBar: { marginBottom: 15 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  subtitle: { fontSize: 16, color: 'gray', textAlign: 'center', marginBottom: 20 },
  image: { width: '100%', height: 200, backgroundColor: '#ccc', borderRadius: 10 },
  buttonContainer: { marginTop: 15, width: '80%' },
  button: { backgroundColor: '#FF385C', borderRadius: 10, paddingVertical: 10 },
});

export default HomeScreen;
