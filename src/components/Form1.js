/* eslint-disable react-native/no-inline-styles */
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
        <SafeAreaView style={styles.container3}>
          <View style={styles.container4}>
            <View style={styles.containerTouchBack}>
              <TouchableOpacity
                onPress={this.toggleForm}
                style={styles.TouchBack}>
                <Text style={styles.textStyleBack}>Trở về</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container5}>
              <View style={styles.containerTextInput}>
                <Text style={styles.textStyle3}>Tỉnh:</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
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
                <Text style={styles.textStyleSearch}>Tìm</Text>
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
  container3: {flex: 1, flexDirection: 'column', backgroundColor: 'yellow'},
  container4: {flex: 1, flexDirection: 'column'},
  container5: {
    width: '80%',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  container: {flex: 1, flexDirection: 'column', backgroundColor: 'pink'},
  container1: {flex: 0.1, justifyContent: 'center', alignItems: 'center'},
  container2: {flex: 0.08, flexDirection: 'row', justifyContent: 'center'},
  containerTouchBack: {
    width: '20%',
    justifyContent: 'flex-start',
    marginTop: 2,
  },
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
  TouchBack: {
    padding: 5,
    backgroundColor: 'gray',
    borderRadius: 100,
    alignItems: 'center',
  },
  textStyle1: {color: 'black', fontSize: 25, fontWeight: 'bold'},
  textStyle2: {fontSize: 15, fontWeight: '100', color: 'gray', paddingLeft: 5},
  textStyleSearch: {fontSize: 15, fontWeight: '500', color: 'black'},
  textStyleBack: {fontSize: 15, fontWeight: '500', color: 'black'},
  textStyle3: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
});
