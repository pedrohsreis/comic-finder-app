/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
jest.useFakeTimers()
import React from 'react';
import {
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from "./src/screens/Onboarding";
import ComicsList from "./src/screens/ComicsList";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ed1d24" barStyle="light-content" />
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="ComicsList" component={ComicsList} />
        <Stack.Screen name="Home" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
