import React, {Component} from 'react';
import {
  Text,
  View,
  Dimentions,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
export default class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowForm: false,
      txtEn: '',
      txtVn: '',
    };
  }
  toggleForm = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  };
  renderForm = () => {
    if (this.state.shouldShowForm) {
      return (
        <View>
          <View style={styles.containerText}>
            <Text style={styles.textStyle1}> A</Text>
          </View>
        </View>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.container1}>
            <Text style={styles.textStyle1}>Dự báo thời tiết</Text>
          </View>
          <View style={styles.container2}>
            <View style={styles.containerTextInput}>
              <TextInput placeholder="Nhập tên tỉnh" style={styles.textInput} />
            </View>
            <View style={styles.containerTouchSearch}>
              <TouchableOpacity
                onPress={this.toggleForm}
                style={styles.TouchSearch}>
                <Text style={styles.textStyleTouch}>Tìm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      );
    }
  };

  render() {
    return this.renderForm();
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', backgroundColor: 'pink'},
  container1: {flex: 0.1, justifyContent: 'center', alignItems: 'center'},
  container2: {flex: 0.08, flexDirection: 'row', justifyContent: 'center'},
  containerTouchSearch: {
    width: '20%',
    alignItems: 'center',
    marginTop: 2,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  containerTextInput: {
    width: '80%',
    marginTop: 2,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    height: 40,
    fontSize: 15,
    paddingHorizontal: 5,
  },
  TouchSearch: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 100,
  },
  textStyle1: {color: 'black', fontSize: 25, fontWeight: 'bold'},
  textStyle2: {fontSize: 15, fontWeight: '100', color: 'gray', paddingLeft: 5},
  textStyleTouch: {fontSize: 15, fontWeight: '900', color: 'black'},
});
