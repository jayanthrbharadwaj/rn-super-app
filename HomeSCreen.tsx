/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 import React, {useState, useEffect} from 'react';
 import {SafeAreaView, StatusBar, StyleSheet, Text, View, Button,TouchableOpacity, BackHandler} from 'react-native';
 import {Federated} from '@callstack/repack/client';
 import { StackScreenProps } from '@react-navigation/native-stack';
 import { RootStackParamList } from './types';
 import Counter from './src/Counter';
import { RecoilRoot } from 'recoil';

 const App1 = React.lazy(() => Federated.importModule('rnminiappone', './App'));
 const App2 = React.lazy(() => Federated.importModule('rnminiapptwo', './App'));
 const App3 = React.lazy(() => Federated.importModule('rnminiappthree', './App'));
 const App4 = React.lazy(() => Federated.importModule('rnminiappfour', './App'));


type Props = StackScreenProps<RootStackParamList, 'Home'>;

const HomeSCreen: React.FC<Props> = ({ navigation }) => {

  return (
    <SafeAreaView>
    <StatusBar />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Micro Frontend</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#dff0f7" }]}
            onPress={() => navigation.navigate('App1', {name: "$794.43", file:"App1"})}
          >
            <Text style={styles.buttonText}>My Accounts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#f7f6df" }]}
            onPress={() => navigation.navigate('App2', {file:"App2"})}
          >
            <Text style={styles.buttonText}>Transfer and Payments</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#f7dfec" }]}
            onPress={() => navigation.navigate('App3', {file:"App3"})}
          >
            <Text style={styles.buttonText}>Account Services</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#e5dff7' }]}
            onPress={() => navigation.navigate('App4', {file:"App4"})}
          >
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
          {/* <Counter /> */}
          {/* <RecoilRoot>
           <Counter />
          </RecoilRoot> */}
      </View>
      
     
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems:'center',
  },
  miniAppWrapper: {
    // flex:1,
  },
  backWrapper: {
    //backgroundColor: '#E1F8DC',
    marginTop: 50,
  },
  buttonStyling:{
    margin:10
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 380,
    alignItems: 'center',
    borderBottomWidth:1
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
  },
  heading:{
    fontWeight:'bold',
    fontSize:35,
    justifyContent:'flex-start',
    marginBottom:40,
    color:'black'
  }
});
 export default HomeSCreen;
 