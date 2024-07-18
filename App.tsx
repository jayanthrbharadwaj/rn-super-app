/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View, Button,TouchableOpacity, BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Federated} from '@callstack/repack/client';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeSCreen from './HomeSCreen';
import Counter from './src/Counter';
import { RecoilRoot } from 'recoil';
 

const App1 = React.lazy(() => Federated.importModule('rnminiappone', './App'));
const App2 = React.lazy(() => Federated.importModule('rnminiapptwo', './App'));
const App3 = React.lazy(() => Federated.importModule('rnminiappthree', './App'));
const App4 = React.lazy(() => Federated.importModule('rnminiappfour', './App'));

const Stack = createNativeStackNavigator();
function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeSCreen} />
        <Stack.Screen name="App1" component={App1} />
        <Stack.Screen name="App2" component={App2} />
        <Stack.Screen name="App3" component={App3} />
        <Stack.Screen name="App4" component={App4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
