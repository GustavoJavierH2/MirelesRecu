import React from 'react';
import { Input } from 'react-native-elements';

const SearchBar = () => (
  <Input 
    placeholder="Search Airbnb" 
    leftIcon={{ name: 'search', color: 'gray' }} 
    containerStyle={{ marginBottom: 15 }}  // Espacio agregado
  />
);

export default SearchBar;
