import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailScreen';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PlaceholderScreen = ({ name }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{name} Screen</Text>
  </View>
);

function ExploreStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" options={{ headerShown: false }}>
        {() => (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                const icons = {
                  Explore: 'search',
                  Saved: 'bookmark',
                  Trips: 'flight',
                  Inbox: 'email',
                  Profile: 'person',
                };
                return <Icon name={icons[route.name]} type="material" color={color} size={size} />;
              },
          })}>
            <Tab.Screen name="Explore" component={ExploreStack} options={{ headerShown: false }} />
            <Tab.Screen name="Saved" children={() => <PlaceholderScreen name="Saved" />} />
            <Tab.Screen name="Trips" children={() => <PlaceholderScreen name="Trips" />} />
            <Tab.Screen name="Inbox" children={() => <PlaceholderScreen name="Inbox" />} />
            <Tab.Screen name="Profile" children={() => <PlaceholderScreen name="Profile" />} />
          </Tab.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
