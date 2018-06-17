/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {createStackNavigator, 
        createTabNavigator} from 'react-navigation';


import Like from "./components/Like";
// shall pick .ios or .android based on platform
import About from "./components/About"; 
import Settings from "./components/Settings";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

import FileSys from "./components/FileSys";
import CameraRollView from "./components/CameraRollView";

const StackNavigator = createStackNavigator({
  Home: {
    screen: Home
  },

  FileSys: FileSys,

  CameraRollView: CameraRollView,

  "About": {
    screen: About
  },

  "Settings": {
    screen: Settings
  },

  "Like": {
    screen: Like
  },

  "ProductList": {
    screen: ProductList
  }
} )

const TabNavigator = createTabNavigator({
  Home: {
    screen: StackNavigator
  },
  ProductList: {
    screen: ProductList
  },
  Settings: {
    screen: Settings
  }
})


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
   // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
