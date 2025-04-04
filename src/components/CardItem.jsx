import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CardItem = ({ title, image, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>EXPLORE HOMES</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: { alignItems: 'center', padding: 10 },
  image: { width: 200, height: 150, marginBottom: 10 },
  button: { color: 'blue', marginTop: 10 },
});
export default CardItem;