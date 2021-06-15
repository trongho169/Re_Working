/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView,Navigator} from 'react-native';
import Main from './src/screens/Main';
import Box from './src/components/Box';
import Test from './src/components/Test'
import Test1 from './src/components/Test1'
import Form from './src/components/Form'
import Form1 from './src/components/Form1'
import Screen1 from './src/components/Screen1'
import Screen2 from './src/components/Screen2'

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends Component {
    renderScene(route,navigator){
        switch (route.name){
            case "mhA": return(
                <Text>AAA</Text>
            )
            case "mhB": return(
                <Text>BBB</Text>
            )
        }
    }
    render() {
        return (
            <Navigator
                initialRoute = {{name: "mhA"}}
                renderScene = {this.renderScene}
            />
        )
    }
}

  // render() {
  //   return (
  //     <SafeAreaView style={{flex: 1}}>
  //       {/* <Main /> */}
  //       {/* <Box /> */}
  //       {/* <Test /> */}
  //       {/* <Test1 /> */}
  //       {/* <Form /> */}
  //       <Form1 />
  //     </SafeAreaView>
  //   );
  // }
// }
