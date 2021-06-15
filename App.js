/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Main from './src/screens/Main';
import Box from './src/components/Box';
import Test from './src/components/Test'
import Test1 from './src/components/Test1'
import Form from './src/components/Form'
import Form1 from './src/components/Form1'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <Main /> */}
        {/* <Box /> */}
        {/* <Test /> */}
        {/* <Test1 /> */}
        {/* <Form /> */}
        <Form1 />
      </SafeAreaView>
    );
  }
}
