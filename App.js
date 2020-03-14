/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//https://reactnavigation.org/docs/hello-react-navigation

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>Alert App</Text>
    </View>
  );
}

function CreateScreen() {
  return (
    <View>
      <Text>Create Alert</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;