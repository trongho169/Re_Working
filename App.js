import React, {Component} from 'react';
import {
  Text,
  View,
  Dimentions,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Main from './src/screens/Main';
export default class App extends Component {
  shouldRenderWord(word) {
    if (word.isMemorized) {
      return '---';
    } else {
      return word.vn;
    }
  }
  //<Text style={styles.textStyleVn}>{this.shouldRenderWord(word)}</Text>
  render() {
    const word = {en: 'One', vn: 'Một', isMemorized: true};
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.textStyleEnAndVn}>{word.en}</Text>
          <Text style={styles.textStyleEnAndVn}>
            {word.isMemorized ? '---' : word.vn}
          </Text>
        </View>
        
        <View style={styles.containerTouchAble}>
          <TouchableOpacity style={styles.TouchForgotAndRemove}>
            <Text style={styles.textForgotAndRemove}>Forgot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchForgotAndRemove}>
            <Text style={styles.textForgotAndRemove}>Remove</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
//các style để display
const styles = StyleSheet.create({
  // các thẻ SafeAreaView
  container: {flex: 1, flexDirection: 'column'},
  // container button
  containerTouchAble: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  // container text
  containerText: {flexDirection: 'row', justifyContent: 'space-evenly'},
  // cấu hình style cho nút Forgot và Remove
  TouchForgotAndRemove: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  textForgotAndRemove: {fontSize: 15, color: 'black'},
  textStyleEnAndVn: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});
