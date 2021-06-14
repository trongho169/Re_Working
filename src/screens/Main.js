/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {id: 1, en: 'One', vn: 'Một', isMemorized: false},
        {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
        {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
        {id: 4, en: 'Four', vn: 'Bốn', isMemorized: true},
        {id: 5, en: 'Five', vn: 'Năm', isMemorized: false},
      ],
    };
  }
  renderWord = (word) => {
    return (
      <View style={styles.containerWord} key={word.id}>
        <View style={styles.containerText}>
          <Text style={styles.textStyleEn}>{word.en}</Text>
          <Text style={styles.textStyleVn}>
            {word.isMemorized ? '----' : word.vn}
          </Text>
        </View>
        <View style={styles.containerTouchable}>
          <TouchableOpacity
            onPress={() => {
              const newWords = this.state.words.map((item) => {
                if (item.id === word.id) {
                  return {...item, isMemorized: !item.isMemorized};
                }
                return item;
              });
              this.setState({words: newWords});
            }}
            style={{
              ...styles.touchForgot,
              backgroundColor: word.isMemorized ? 'green' : 'red',
            }}>
            <Text style={styles.textTouchForgot}>
              {word.isMemorized ? 'Forgot' : 'Memorized'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const newWords = this.state.words.filter((item) => {
                if (item.id === word.id) {
                  return false;
                }
                return true;
              });
              this.setState({words: newWords});
            }}
            style={styles.touchRemove}>
            <Text style={styles.textTouchRemove}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.words.map((word) => {
          return this.renderWord(word);
        })}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  //set khung bao quanh một View
  containerWord: {
    marginTop: '4%',
    justifyContent: 'center',
    height: '17%',
    flexDirection: 'column',
    backgroundColor: 'gainsboro',
    elevation: 1,
    borderRadius: 5,
  },
  //set vị trí One Một trong 1 view
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  //set vị trí nút nhấn trong 1 view
  containerTouchable: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  //set chữ Tiếng Anh One Two
  textStyleEn: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  // set chữ Tiếng Việt Một Hai Ba
  textStyleVn: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  //khung viền chữ Forgot
  touchForgot: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  // khung viền chữ Remove
  touchRemove: {
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
  // set chữ Forgot
  textTouchForgot: {
    fontSize: 14,
    color: 'white',
  },
  // set chữ Remove
  textTouchRemove: {
    fontSize: 14,
    color: 'black',
  },
});