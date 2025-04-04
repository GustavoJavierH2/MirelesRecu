import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import RatingStars from '../components/RatingStars';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Imagen grande en la parte superior */}
      <Image source={{ uri: 'https://via.placeholder.com/350x200' }} style={styles.heroImage} />
      
      {/* Ubicación */}
      <View style={styles.locationContainer}>
        <Icon name="map-marker" type="font-awesome" color="gray" size={16} />
        <Text style={styles.city}>San Diego, CA</Text>
      </View>
      
      {/* Detalles */}
      <Text style={styles.name}>Meet Au Pair Lisa</Text>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
      <Text style={styles.quote}>“Lisa is a wonderful au pair with great experience!”</Text>
      
      {/* Rating y precio */}
      <RatingStars />
      <Text style={styles.price}>$99/night</Text>
      
      {/* Botón */}
      <Button title="Check Availability" buttonStyle={styles.button} containerStyle={styles.buttonContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF3F0', alignItems: 'center', padding: 20 },
  heroImage: { width: '100%', height: 200, borderRadius: 10, marginBottom: 15 },
  locationContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  city: { fontSize: 16, color: 'gray', marginLeft: 5 },
  name: { fontSize: 22, fontWeight: 'bold', marginTop: 5, textAlign: 'center' },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginVertical: 10 },
  quote: { fontStyle: 'italic', textAlign: 'center', marginBottom: 10, paddingHorizontal: 15 },
  price: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  button: { backgroundColor: '#000', paddingVertical: 10 },
  buttonContainer: { marginTop: 10, width: '80%' },
});

export default DetailsScreen;