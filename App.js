/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Main from './src/screens/Main';
import Box from './src/components/Box';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <Main /> */}
        <Box />
      </SafeAreaView>
    );
  }
}
