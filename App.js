/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView,Navigator} from 'react-native';
import Main from './src/screens/Main';
import Box from './src/components/Box';
import Test from './src/components/Test'
import Test1 from './src/components/Test1'
import Form from './src/components/Form'
import Form1 from './src/components/Form1'
import TextInput1 from './src/components/TextInput1'
import Option from './src/components/Option'
import Option1 from './src/components/Option1'
import Telephone from './src/components/Telephone'
import Telephone1 from './src/components/Telephone1'
import Api from './src/components/Api'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <Main /> */}
        {/* <Box /> */}
        {/* <Test /> */}
        {/* <Test1 /> */}
        {/* <Form /> */}
        {/* <Form1 /> */}
        {/* <TextInput1 /> */}
        {/* <Option /> */}
        {/* <Option1 /> */}
        {/* <Telephone /> */}
        {/* <Telephone1 /> */}
        <Api />
      </SafeAreaView>
    );
  }
}


// renderScene(route,navigator){
//   switch (route.name){
//       case "mhA": return(
//           <Text>AAA</Text>
//       )
//       case "mhB": return(
//           <Text>BBB</Text>
//       )
//   }
// }
// render() {
//   return (
//       <Navigator
//           initialRoute = {{name: "mhA"}}
//           renderScene = {this.renderScene}
//       />
//   )
// }
// }