/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import 'react-native-gesture-handler';
import React from 'react';
import {AlertProvider} from './src/context/AlertsContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';


//https://reactnavigation.org/docs/hello-react-navigation
const Stack = createStackNavigator();

function App() {
  return (
    <AlertProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{title: 'Alert App'}}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AlertProvider>
  );
}

export default App;